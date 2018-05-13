/**
 * Check if el matches the selector.
 *
 * @param {Element|*} el
 * @param {String} selector
 * @returns {Boolean}
 */
function matchesSelector(el, selector) {
  if (!el) {
    return false;
  }

  try {
    if (el.matches) {
      return el.matches(selector);
    }
    if (el.msMatchesSelector) {
      return el.msMatchesSelector(selector);
    }
  } catch (e) {
    return false;
  }
}

export default matchesSelector;
