const test = require('node:test');
const assert = require('node:assert/strict');
const { wrapOffset } = require('../scripts/loop-math.js');

test('resumed animation and large drags stay within one repeated strip', () => {
  for (const delta of [3, -3, 1234567, -1234567]) {
    const wrapped = wrapOffset(20 + delta, 300);
    assert.ok(wrapped >= 0 && wrapped < 300);
    assert.equal(Math.abs((20 + delta - wrapped) % 300), 0);
  }
  assert.equal(wrapOffset(3010, 300), 10);
  assert.equal(wrapOffset(-3010, 300), 290);
});

test('unmeasurable layouts do not produce invalid transforms', () => {
  for (const period of [0, -1, NaN, Infinity]) assert.equal(wrapOffset(100, period), 0);
  for (const offset of [NaN, Infinity, -Infinity]) assert.equal(wrapOffset(offset, 300), 0);
  assert.equal(Object.is(wrapOffset(-600, 300), -0), false);
});
