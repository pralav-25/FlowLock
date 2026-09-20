(function (root) {
  'use strict';
  function compareWindows(timestamps, { limit = 60, windowMs = 60000 } = {}) {
    if (!Number.isSafeInteger(limit) || limit < 1 || !Number.isSafeInteger(windowMs) || windowMs < 1)
      throw new RangeError('Limit and window must be positive whole numbers.');
    if (!Array.isArray(timestamps) || timestamps.length > 10000 || timestamps.some((time, i) =>
      !Number.isSafeInteger(time) || time < 0 || (i > 0 && time < timestamps[i - 1])))
      throw new RangeError('Use at most 10,000 non-negative timestamps in ascending order.');
    let bucket = -1, fixedCount = 0, fixedAccepted = 0, head = 0;
    const sliding = [];
    for (const time of timestamps) {
      const nextBucket = Math.floor(time / windowMs);
      if (nextBucket !== bucket) { bucket = nextBucket; fixedCount = 0; }
      if (fixedCount < limit) { fixedCount++; fixedAccepted++; }
      // Half-open window: a request exactly one window old has expired.
      while (head < sliding.length && sliding[head] <= time - windowMs) head++;
      if (sliding.length - head < limit) sliding.push(time);
    }
    return { total: timestamps.length,
      fixed: { accepted: fixedAccepted, rejected: timestamps.length - fixedAccepted },
      sliding: { accepted: sliding.length, rejected: timestamps.length - sliding.length } };
  }
  const api = { compareWindows };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FlowLockSimulation = api;
})(globalThis);
