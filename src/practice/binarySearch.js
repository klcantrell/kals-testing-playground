/**
 * @param {array} arr - sorted array as input
 * @param {*} target - value to search for in array
 * @returns {number} - index of located target
 */
const binarySearchForIndex = (arr, target) => {
  const middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) {
    return middle;
  }
  if (target > arr[middle]) {
    return binarySearchForIndex(arr.slice(middle), target);
  }
  if (target < arr[middle]) {
    return binarySearchForIndex(arr.slice(0, middle), target);
  }
};

export default binarySearchForIndex;