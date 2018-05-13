/**
 * Remove an element from the given array and return a new array instance.
 *
 * @param {Array} array
 * @param {*} element
 * @returns {Array}
 */
function removeFromArray(array, element) {
  let newArray = [...array];
  const index = newArray.indexOf(element);

  if (index === -1) {
    return array;
  }

  newArray.splice(index, 1);

  return newArray;
}

export default removeFromArray;
