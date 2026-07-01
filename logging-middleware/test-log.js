const { Log } = require('./index');

async function test() {
  console.log('Testing Log function...');
  try {
    const result = await Log('backend', 'info', 'utils', 'Test message from logging middleware init');

    console.log('Log call completed. Response:', result);
  } catch (err) {
    console.error('Log call failed:', err);
  }
}

test();
