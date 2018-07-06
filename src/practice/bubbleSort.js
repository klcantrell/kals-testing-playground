const swap = (array, x, y) => {
	let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

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