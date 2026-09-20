const { test } = require('node:test');
const assert = require('node:assert/strict');
const { compareWindows } = require('../scripts/rate-limit.js');
test('a boundary burst exceeds the fixed limit but not the sliding limit', () => {
  const result = compareWindows([...Array(60).fill(59999), ...Array(60).fill(60001)]);
  assert.deepEqual(result, { total: 120, fixed: { accepted: 120, rejected: 0 }, sliding: { accepted: 60, rejected: 60 } });
});
test('an expired request releases capacity; rejected requests consume none', () => {
  const result = compareWindows([0, 1, 59999, 60000], { limit: 1 });
  assert.deepEqual(result.sliding, { accepted: 2, rejected: 2 });
  assert.deepEqual(compareWindows([]).fixed, { accepted: 0, rejected: 0 });
});
test('malformed and unbounded simulations are rejected', () => {
  for (const times of [[2, 1], [-1], [NaN], [0.5], Array(10001).fill(0)])
    assert.throws(() => compareWindows(times), RangeError);
  for (const limit of [0, -1, 1.5, Infinity]) assert.throws(() => compareWindows([0], { limit }), RangeError);
});
