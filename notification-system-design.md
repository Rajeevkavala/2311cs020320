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
