const axios = require('axios');
const path = require('path');
require('dotenv').config();

// Import the logging middleware
let Log;
try {
  const loggingModule = require('../logging-middleware/index.js');
  Log = loggingModule.Log;
} catch (err) {
  console.warn('Logging middleware not found, using console fallback');
  Log = async (stack, level, pkg, msg) => {
    console.log(`[${level.toUpperCase()}] [${pkg}] ${msg}`);
  };
}

function solveKnapsack(vehicles, capacity) {
  const n = vehicles.length;
  const dp = Array.from({ length: n + 1 }, () => new Int32Array(capacity + 1));

  for (let i = 1; i <= n; i++) {
    const { Duration, Impact } = vehicles[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (Duration <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - Duration] + Impact);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  const selected = [];
  let w = capacity;
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selected.push(vehicles[i - 1]);
      w -= vehicles[i - 1].Duration;
    }
  }

  return {
    totalImpact: dp[n][capacity],
    totalDuration: capacity - w,
    selected: selected.reverse() 
  };
}

async function runScheduler() {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.ACCESS_TOKEN;

  if (!baseUrl || !token) {
    console.error('Error: BASE_URL or ACCESS_TOKEN not specified in environmental variables.');
    return;
  }

  await Log('backend', 'info', 'service', 'Starting Vehicle Maintenance Scheduler microservice');

  try {
    // 1. Fetch Depot and Vehicle Details in parallel
    console.log('Fetching depot and vehicle information...');
    const headers = { Authorization: `Bearer ${token}` };
    const [depotsRes, vehiclesRes] = await Promise.all([
      axios.get(`${baseUrl}/depots`, { headers }),
      axios.get(`${baseUrl}/vehicles`, { headers })
    ]);

    const depots = depotsRes.data.depots;
    const vehicles = vehiclesRes.data.vehicles;

    if (!depots || !vehicles) {
      throw new Error('Invalid response structure from evaluation service APIs.');
    }

    const message = `Fetched ${depots.length} depots and ${vehicles.length} vehicles from APIs.`;
    console.log(message);
    await Log('backend', 'info', 'service', message);

    // 2. Perform optimal scheduling for each depot
    console.log('\n--- Daily Maintenance Schedule ---');
    let overallImpact = 0;
    let overallDuration = 0;

    for (const depot of depots) {
      const result = solveKnapsack(vehicles, depot.MechanicHours);
      overallImpact += result.totalImpact;
      overallDuration += result.totalDuration;

      console.log(`\nDepot ID: ${depot.ID}`);
      console.log(`Available Budget: ${depot.MechanicHours} hours`);
      console.log(`Total Scheduled Duration: ${result.totalDuration} hours`);
      console.log(`Total Operational Impact: ${result.totalImpact}`);
      console.log(`Number of Vehicles Scheduled: ${result.selected.length}`);
      console.log('Scheduled Tasks:');
      result.selected.forEach(v => {
        console.log(`  - TaskID: ${v.TaskID} | Duration: ${v.Duration} hr(s) | Impact: ${v.Impact}`);
      });
    }

    const summaryMsg = `Scheduler run completed. Total depots: ${depots.length}, Total operational impact: ${overallImpact}, Total duration: ${overallDuration} hrs.`;
    console.log(`\n${summaryMsg}`);
    await Log('backend', 'info', 'service', summaryMsg);

  } catch (error) {
    const errorMsg = `Scheduler run failed: ${error.message}`;
    console.error(errorMsg);
    await Log('backend', 'error', 'service', errorMsg);
  }
}

runScheduler();

module.exports = { solveKnapsack };
