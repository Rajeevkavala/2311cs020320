Notification System Design

This is a simple notification system for students and staff. Admin can send notifications like placements, events or results and users can see them in the app.

APIs

POST /api/notifications

Used to create a notification.

Request

```json
{
  "title": "New Placement Drive",
  "message": "Google is coming tomorrow",
  "type": "Placement"
}
```

GET /api/notifications

Returns the latest notifications for the user.

Real Time

I will use WebSocket. When a notification is added, the backend sends it to all connected users, so they don't have to refresh the page.

Database

PostgreSQL is enough because the data is simple and easy to manage.

Tables

* notifications
* user_notifications

Query

```sql
SELECT n.*
FROM notifications n
JOIN user_notifications un
ON n.id = un.notification_id
WHERE un.user_id = 123
ORDER BY n.created_at DESC
LIMIT 10;
```

Problems

If there are lots of users, the user_notifications table becomes very big. That can make inserts and queries slower.

Indexes

I will add indexes on user_id and notification_id because those are searched often.

Caching

Redis can store recent notifications, so we don't hit the database every time.

Pagination

Load only 10 notifications at a time instead of everything.

notify_all

For sending notifications to everyone, first save it in the database and then let a background worker send emails or push notifications. This keeps the API fast.
