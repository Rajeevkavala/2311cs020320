const axios = require('axios');
require('dotenv').config();

async function Log(stack, level, package, message) {
  const allowedStacks = ['backend', 'frontend'];
  const allowedLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
  const backendPackages = [
    'cache', 'controller', 'cron_job', 'db', 'domain', 'handler',
    'repository', 'route', 'service', 'auth', 'config', 'middleware', 'utils'
  ];
  const frontendPackages = [
    'api', 'component', 'hook', 'page', 'state', 'style', 'auth', 'config', 'middleware', 'utils'
  ];

  if (!allowedStacks.includes(stack)) {
    return;
  }
  if (!allowedLevels.includes(level)) {
    return;
  }
  if (stack === 'backend' && !backendPackages.includes(package)) {
    return;
  }
  if (stack === 'frontend' && !frontendPackages.includes(package)) {
    return;
  }

  try {
    const response = await axios.post(`${process.env.BASE_URL}/logs`, {
      stack,
      level,
      package,
      message
    }, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { Log };
