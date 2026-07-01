const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Import the logging middleware
let Log;
try {
  const loggingModule = require('../logging-middleware/index.js');
  Log = loggingModule.Log;
} catch (err) {
  console.log('Logging middleware not found, using console fallback');
  Log = async (stack, level, pkg, msg) => {
    console.log(`[${level.toUpperCase()}] [${pkg}] ${msg}`);
  };
}

// Request logger middleware
app.use(async (req, res, next) => {
  try {
    await Log('backend', 'info', 'middleware', `${req.method} request to ${req.url}`);
  } catch (err) {
    console.error('Logging failed:', err.message);
  }
  next();
});

// GET /notifications/priority
app.get('/notifications/priority', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    const notifications = response.data.notifications || [];

    const priorityMap = {
      'Placement': 3,
      'Result': 2,
      'Event': 1
    };

    // Simple sorting: Placement (3) > Result (2) > Event (1).
    // If priority is same, sort by most recent timestamp first.
    notifications.sort((a, b) => {
      const priorityA = priorityMap[a.Type] || 0;
      const priorityB = priorityMap[b.Type] || 0;

      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      // Sort by timestamp descending
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    // Get top 10
    const topNotifications = notifications.slice(0, 10);

    await Log('backend', 'info', 'controller', `Returned top ${topNotifications.length} prioritized notifications`);

    res.json({ topNotifications });
  } catch (error) {
    console.error('Error fetching notifications:', error.message);
    await Log('backend', 'error', 'controller', `Failed to fetch notifications: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await Log('backend', 'info', 'config', `Server started on port ${port}`);
});
