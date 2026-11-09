/* Shared cyclic positioning for the logo strip and draggable text marquee. */
(function (root) {
  function wrapOffset(offset, period) {
    if (!Number.isFinite(offset) || !Number.isFinite(period) || period <= 0) return 0;
    // A tab can resume several whole loops later; subtracting once is insufficient.
    const remainder = offset % period;
    return remainder < 0 ? remainder + period : remainder || 0;
  }
  if (typeof module === 'object' && module.exports) module.exports = { wrapOffset };
  else root.FlowLockLoop = { wrapOffset };
})(globalThis);
