## Logging Middleware
# Logging Middleware Testing Guide

This guide explains how to test the logging middleware package in your local environment.

## Prerequisites

Ensure you have a `.env` file in the root of your project containing:
```env
ACCESS_TOKEN=your_bearer_token
BASE_URL=http://4.224.186.213/evaluation-service
```

## Running the Test

1. Navigate to the `logging-middleware` directory.
2. Run npm installation if you haven't already:
   ```bash
   npm install
   ```
3. Run the test script:
   ```bash
   node test-log.js
   ```

## Expected Output

You should see:
```text
Testing Log function...
Log call completed.
```

If the credentials are valid and the server is reachable, the log event is successfully transmitted to the central evaluator.
