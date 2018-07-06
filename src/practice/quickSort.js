/**
 * @param {array} left - left half of original input array
 */
const quickSortBasic = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let lesser = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    }
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    }
  }
  return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
};

export default quickSortBasic;