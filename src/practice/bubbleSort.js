/**
 * @param {array} array - input array with items to be swapped 
 * @param {number} x - first index in array to swap
 * @param {number} y -  other index in array to swap
 */

const swap = (array, x, y) => {
	let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

/**
 * @param {array} arr - input array to be sorted
 */

const bubbleSortBasic = arr => {
  let outputArray = Array.from(arr);
	for (let x = 0; x < arr.length; x++) {
  	for (let y = 1; y < arr.length; y++) {
    	if (outputArray[y - 1] > outputArray[y]) {
      	swap(outputArray, y - 1, y);
      }
    }
  }
  return outputArray;
};

export default bubbleSortBasic;