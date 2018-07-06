import binarySearch from './binarySearch';

describe('binary search function', () => {
  it('should successfully return the index of a target found in a sorted array', () => {
    const inputArray = [1, 2, 3, 4];
    expect(binarySearch(inputArray, 3)).toBe(2);
    expect(binarySearch(inputArray, 2)).toBe(1);
  });
});