# Notification System Design

We need a system to send notifications to students and staff. Here is the basic design for how the APIs and real-time updates will work.

## REST APIs

We will have a few basic endpoints to create and get notifications.

### 1. Send a Notification
This endpoint is used when a new event, exam result, or placement drive is created, and we want to notify users.

* **URL:** `/api/notifications`
* **Method:** `POST`
* **Headers:**
  * `Content-Type: application/json`
  * `Authorization: Bearer <token>`
* **Request Body:**
  ```json
  {
    "title": "New Placement Drive",
    "message": "Google is visiting campus tomorrow.",
    "type": "Placement"
  }
  ```
* **Response (Success - 201 Created):**
  ```json
  {
    "id": 101,
    "title": "New Placement Drive",
    "message": "Google is visiting campus tomorrow.",
    "type": "Placement",
    "createdAt": "2026-07-01T13:00:00Z"
  }
  ```

### 2. Get Notifications for a User
This endpoint fetches the latest notifications for the logged-in user.

* **URL:** `/api/notifications`
* **Method:** `GET`
* **Headers:**
  * `Authorization: Bearer <token>`
* **Response (Success - 200 OK):**
  ```json
  [
    {
      "id": 101,
      "title": "New Placement Drive",
      "message": "Google is visiting campus tomorrow.",
      "type": "Placement",
      "createdAt": "2026-07-01T13:00:00Z"
    }
  ]
  ```

## Real-Time Notifications

We need a way to show notifications instantly on the frontend without reloading the page. 

We can use WebSockets for this. When the frontend loads, it opens a WebSocket connection to our backend (like `ws://localhost:3000`). The backend keeps track of all active client connections. 

When a new notification is posted through the POST API, the backend loops through the connected clients and sends the notification data over the socket connection. The frontend receives it and shows a popup to the user.

## Database Choice

We will use PostgreSQL. Here is why:
1. It is a relational database, and notification data is structured (we have columns like title, type, user_id, status, created_at).
2. It handles indexes and complex queries very well.
3. It has native support for JSONB if we ever want to store extra notification details.

### Schema

```sql
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., 'Placement', 'Result', 'Event'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_notifications (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    notification_id INT REFERENCES notifications(id) ON DELETE CASCADE,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP
);
```

### SQL Queries

To fetch the top 10 notifications for a user sorted by type priority and date:

```sql
SELECT n.*, un.is_read
FROM notifications n
JOIN user_notifications un ON n.id = un.notification_id
WHERE un.user_id = 123
ORDER BY 
    CASE 
        WHEN n.type = 'Placement' THEN 1
        WHEN n.type = 'Result' THEN 2
        WHEN n.type = 'Event' THEN 3
        ELSE 4
    END ASC,
    n.created_at DESC
LIMIT 10;
```

### Scaling Problems

As the number of students and notifications grows, this design has some issues:
1. **Large JOIN Table**: The `user_notifications` table will grow extremely fast. If we have 10,000 students and send a campus-wide notification, it inserts 10,000 rows. Soon, joining these tables becomes very slow.
2. **Write Bottleneck**: Inserting thousands of rows for every notification blocks other queries.

## Indexing & Query Optimization

### Why Query is Slow
Without indexes, PostgreSQL has to scan every single row in the database tables to find the matches for user_id. If the table has millions of rows, this takes a lot of time and resources.

### Better Indexes
To speed this up, we should add indexes on the columns used in WHERE, JOIN, and ORDER BY:

```sql
CREATE INDEX idx_user_notifications_user ON user_notifications(user_id);
CREATE INDEX idx_user_notifications_notification ON user_notifications(notification_id);
CREATE INDEX idx_notifications_type_date ON notifications(type, created_at DESC);
```

### Complexity
- **Without indexes**: The database does a sequential scan, which takes O(N) time.
- **With indexes**: The database uses a B-Tree index scan, which takes O(log N) time.

### Why Indexing Every Column is Bad
We should not index every column because:
1. **Slower Writes**: Every INSERT, UPDATE, or DELETE will need to rewrite the indexes, slowing down write operations.
2. **Disk Space**: Indexes take up additional disk space.
3. **Memory Usage**: The database needs to keep indexes in memory (RAM) for fast lookups. If we index everything, RAM gets wasted.

### Placement Query
To fetch only the Placement notifications:

```sql
SELECT n.*
FROM notifications n
JOIN user_notifications un ON n.id = un.notification_id
WHERE un.user_id = 123 AND n.type = 'Placement'
ORDER BY n.created_at DESC;
```

## Caching, Pagination & WebSockets

### Redis Caching
To avoid querying the database every time a user loads their notifications, we can store notifications in Redis (an in-memory store).
- We can save the user's latest 50 notifications in Redis under the key `user:123:notifications`.
- When a user requests notifications, we check Redis first. If it is there, we return it. If not, we query the database, store it in Redis with a 5-minute expiry, and return it.

### Pagination
Instead of loading all notifications at once, we load them in pages:
- **Offset Pagination**: Using `LIMIT 10 OFFSET 20`. It is simple but gets slow on large offsets because the database still scans the skipped rows.
- **Cursor Pagination**: Using `WHERE id < last_seen_id LIMIT 10`. It is much faster because it uses the primary key index directly.

### WebSocket Trade-offs
WebSockets allow real-time communication but have some trade-offs:
1. **Resource Usage**: The server must keep a persistent connection open for every online user, using memory.
2. **Reconnections**: Mobile clients disconnect frequently. We need client logic to handle reconnects and fetch missed notifications.
3. **Multi-server Scaling**: If we run multiple backend servers, a client on Server A won't get notifications published on Server B unless we use a Pub/Sub system like Redis.

## Better notify_all Architecture (Asynchronous Notifications)

When sending a notification to all students:
1. We write the notification to the database.
2. We push notification tasks into an in-memory queue.
3. A background worker picks up tasks from the queue, sends emails/push notifications, handles failures, and retries if needed.

### Why Email Should Not Block DB Insert
If we send emails synchronously during the database insert:
- Sending an email takes 1-3 seconds. If we have 10,000 students, the API request will timeout or take hours.
- If the email service fails, the database transaction might roll back, causing us to lose the notification record.
- By doing it asynchronously, the DB insert happens instantly (a few milliseconds), the API returns success immediately to the publisher, and the emails are sent in the background.

### Failure Handling & Retry
- **Try/Catch**: Each email task is wrapped in a try/catch block.
- **Retry Queue**: If sending fails (e.g., email API is down), we don't throw away the task. We increment a retry count and push it back to the end of the queue with a delay (exponential backoff).
- **Max Retries**: If it fails more than 3 times, we log it as an error or move it to a Dead Letter Queue (DLQ) so we don't block the queue forever.




