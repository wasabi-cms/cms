/**
 * Get the parent or host element of el.
 *
 * @param {Element|*} el
 * @returns {Element}
 */
function getParentOrHost(el) {
  const parent = el.host;

  return (parent && parent.nodeType) ? parent : el.parentNode;
}

export default getParentOrHost;
