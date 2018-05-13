/**
 * Get the css properties or a specific css property of an el, or apply a css property and value on the el.
 *
 * @param {Element|*} el
 * @param {String?} prop
 * @param {String|Number?} val
 * @returns {*}
 */
function css(el, prop, val) {
  let style = el && el.style;

  if (!style) {
    return;
  }

  if (typeof prop !== 'undefined') {
    if (!(prop in style)) {
      prop = '-webkit-' + prop;
    }

    if (typeof val !== 'undefined') {
      style[prop] = val;
      return;
    }

    return style[prop];
  }

  let styles;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    styles = document.defaultView.getComputedStyle(el, '');
  } else if (el.currentStyle) {
    styles = el.currentStyle;
  }

  return styles;
}

export default css;
