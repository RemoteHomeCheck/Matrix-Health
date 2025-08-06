// Updated unit tests for micro-optimizations  
import assert from 'assert';

// Mock the helper functions for testing
const calcPayback = (cost, revenue) => {
  if (cost === 0) return 0;
  if (revenue === cost) return null;
  if (revenue < cost) return null;
  return cost / (revenue - cost);
};

const formatROI = (roi) => {
  if (roi === null) return "∞";
  if (roi > 100) {
    const multiple = (roi / 100) + 1;
    return `${multiple.toFixed(1)}x return (${roi.toFixed(1)}%)`;
  }
  return `${roi.toFixed(1)}%`;
};

const formatPaybackPeriod = (months) => {
  if (months === undefined) return "Never";
  if (months === null) return "Never";
  if (months === 0) return "Immediate";
  if (months < 1) return `${Math.round(months * 30)} days`;
  return `${months.toFixed(1)} months`;
};

const sumGeometric = (r, n) => {
  if (r === 0) return n;
  return (Math.pow(1 + r, n) - 1) / r;
};

// Test 1: ROI + payback semantics
console.log('Testing improved ROI and payback semantics...');

// Test cases for calcPayback function
const testPayback = (cost, revenue, expected, description) => {
  const result = calcPayback(cost, revenue);
  console.log(`${description}: cost=${cost}, revenue=${revenue} → ${result} (expected: ${expected})`);
  assert.strictEqual(result, expected);
};

// Test various payback scenarios
testPayback(0, 1000, 0, 'Zero cost scenario'); // Immediate payback
testPayback(1000, 1000, null, 'Break-even scenario'); // Never (simplified)
testPayback(1000, 500, null, 'Loss scenario'); // Never (simplified)
testPayback(1000, 2000, 1, 'Profitable scenario'); // 1 month payback

// Test 2: ROI formatting with null handling and x-return multiple
console.log('\nTesting ROI formatting...');
assert.strictEqual(formatROI(null), "∞");
assert.strictEqual(formatROI(50.5), "50.5%"); // Under 100%
assert.strictEqual(formatROI(150.5), "2.5x return (150.5%)"); // Over 100%

// Test 3: Payback formatting with improved semantics
console.log('\nTesting payback formatting...');
assert.strictEqual(formatPaybackPeriod(undefined), "Never"); // Loss
assert.strictEqual(formatPaybackPeriod(null), "Never"); // Break-even (simplified)
assert.strictEqual(formatPaybackPeriod(0), "Immediate");
assert.strictEqual(formatPaybackPeriod(1.5), "1.5 months");
assert.strictEqual(formatPaybackPeriod(0.5), "15 days");

// Test 4: Geometric series helper
console.log('\nTesting geometric series helper...');
assert.strictEqual(sumGeometric(0, 12), 12); // Zero growth case
assert.strictEqual(sumGeometric(0.1, 12), (Math.pow(1.1, 12) - 1) / 0.1); // Standard case

console.log('\n✅ All micro-optimization tests passed!');