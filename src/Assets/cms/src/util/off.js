import captureMode from './capture-mode';

/**
 * Remove an event listener from el.
 *
 * @param {Element|*} el
 * @param {String} event
 * @param {Function} fn
 */
function off(el, event, fn) {
  el.removeEventListener(event, fn, captureMode);
}

export default off;
