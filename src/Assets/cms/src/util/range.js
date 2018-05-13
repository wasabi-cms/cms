/**
 * Create a range array from start to end.
 *
 * @param {Number} start
 * @param {Number} end
 * @returns {Number[]}
 */
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

export default range;
