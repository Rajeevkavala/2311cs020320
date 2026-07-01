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

