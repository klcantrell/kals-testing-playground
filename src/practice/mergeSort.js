/**
 * @param {array} left - left half of original input array
 * @param {array} right - right half of original input array
 * @returns {array}
 */
const merge = (left, right) => {
  let mergedArray = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return mergedArray.concat(left, right);
};

/**
 * @param {array} arr - input array
 * @returns {array}
 */

const mergeSortBasic = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSortBasic(left), mergeSortBasic(right));
};

export default mergeSortBasic;