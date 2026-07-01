# Notification App

Simple backend project for campus notifications.

## Tech Stack

- Node.js
- Express

## Setup

Navigate to the project directory:
```bash
cd notification-app-be
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the project root with the following variables:
```env
ACCESS_TOKEN=your_access_token
BASE_URL=your_api_base_url
```

Start the application:
```bash
npm start
```

## APIs

### GET /notifications/priority
Fetches campus notifications and sorts them by priority and timestamp. Placement notifications have the highest priority, followed by Exam Results, and then Events. Within the same priority, notifications are sorted by timestamp (newest first). Returns the top 10 notifications.

## Screenshots

- **Browser/API Response**: The API response screenshot can be found in the system artifacts folder at: `C:/Users/rajee/.gemini/antigravity-ide/brain/c0eae75b-1e49-4ea0-b839-98a329d5559f/api_screenshot_1782891419454.webp`
- **Terminal Output**:
  ```text
  Server is running on port 3000
  ```
