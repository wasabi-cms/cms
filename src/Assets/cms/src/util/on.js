import captureMode from './capture-mode';

/**
 * Add an event listener to el.
 *
 * @param {Element|*} el
 * @param {String} event
 * @param {Function} fn
 */
function on(el, event, fn) {
  el.addEventListener(event, fn, captureMode);
}

export default on;
