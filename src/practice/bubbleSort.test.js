import bubbleSort from './bubbleSort';

describe('basic bubble sort function', () => {
  it('should sort an array from least to greatest', () => {
    const inputArray = [3, 2, 1, 4];
    expect(bubbleSort(inputArray)).toEqual([1, 2, 3, 4]);
  });

  it('does not mutate its input', () => {
    const inputArray = [3, 2, 1, 4];
    bubbleSort(inputArray);
    expect(inputArray).toEqual([3, 2, 1, 4]);
  });
});