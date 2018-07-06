import mergeSort from './mergeSort';

describe('basic merge sort function', () => {
  it('should sort an array from least to greatest', () => {
    const inputArray = [3, 2, 1, 4];
    expect(mergeSort(inputArray)).toEqual([1, 2, 3, 4]);
  });
});