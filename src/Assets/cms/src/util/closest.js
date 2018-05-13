import matchesSelector from './matches-selector';
import getParentOrHost from './get-parent-or-host';

/**
 * Get the closest element to the given el that matches selector.
 *
 * @param {Element|*} el
 * @param {String} selector
 * @param {Element|*?} context
 * @returns {Element}
 */
function closest(el, selector, context) {
  if (!el) {
    return null;
  }

  context = context || document;

  do {
    if ((selector === '>*' && el.parentNode === context) || matchesSelector(el, selector)) {
      return el;
    }
  } while (el = getParentOrHost(el));
}

export default closest;
