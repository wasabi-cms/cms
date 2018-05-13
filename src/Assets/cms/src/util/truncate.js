/**
 * Truncate the given string to maxLength and append an ending.
 *
 * @param {String} string
 * @param {Number} maxLength
 * @param {String?} ending
 * @returns {String}
 */
function truncate(string, maxLength, ending) {
  ending = ending || '...';

  if (string.length <= maxLength) {
    return string;
  }

  return string.substring(0, maxLength - ending.length) + ending;
}

export default truncate;
