const { solveKnapsack } = require('./index.js');

console.log('--- Running Scheduler Tests ---');

// some mock vehicle tasks
const dummyVehicles = [
  { TaskID: 'task-a', Duration: 2, Impact: 10 },
  { TaskID: 'task-b', Duration: 3, Impact: 15 },
  { TaskID: 'task-c', Duration: 5, Impact: 40 },
  { TaskID: 'task-d', Duration: 7, Impact: 50 }
];

// Test 1: standard knapsack check
// capacity is 10. we should pick task-b and task-d -> total duration = 10, total impact = 65
console.log('Test 1: checking basic knapsack...');
const res1 = solveKnapsack(dummyVehicles, 10);
if (res1.totalImpact !== 65) {
  console.error('Test 1 failed! Expected impact 65, got:', res1.totalImpact);
  process.exit(1);
}
if (res1.totalDuration !== 10) {
  console.error('Test 1 failed! Expected duration 10, got:', res1.totalDuration);
  process.exit(1);
}
console.log('Test 1 passed!');

// Test 2: capacity is 0
console.log('Test 2: capacity of 0...');
const res2 = solveKnapsack(dummyVehicles, 0);
if (res2.totalImpact !== 0 || res2.selected.length !== 0) {
  console.error('Test 2 failed! Expected 0 impact, got:', res2.totalImpact);
  process.exit(1);
}
console.log('Test 2 passed!');

// Test 3: item is too big to fit
console.log('Test 3: item exceeds budget...');
const res3 = solveKnapsack([{ TaskID: 'huge-task', Duration: 10, Impact: 100 }], 5);
if (res3.totalImpact !== 0 || res3.selected.length !== 0) {
  console.error('Test 3 failed! Expected 0 impact, got:', res3.totalImpact);
  process.exit(1);
}
console.log('Test 3 passed!');

// Test 4: everything fits
console.log('Test 4: ample budget, everything fits...');
const res4 = solveKnapsack(dummyVehicles, 30);
if (res4.totalImpact !== 115 || res4.selected.length !== 4) {
  console.error('Test 4 failed! Expected 115 impact, got:', res4.totalImpact);
  process.exit(1);
}
console.log('Test 4 passed!');

console.log('All tests passed successfully!');
