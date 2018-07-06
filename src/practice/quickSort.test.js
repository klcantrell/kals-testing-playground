import quickSort from './quickSort';

describe('basic quick sort function', () => {
  it('should sort an array from least to greatest', () => {
    const inputArray = [3, 2, 1, 4];
    expect(quickSort(inputArray)).toEqual([1, 2, 3, 4]);
  });
});