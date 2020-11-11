import { Hotel, Direction, SortState } from '../types';

export const sortHotels = (data: Hotel[], order: SortState): Hotel[] => {
  const { direction, keyName } = order;
  const sortedData = data.sort((a, b) => {
    const keyA = a[keyName];
    const keyB = b[keyName];
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0;
  });
  if (direction === Direction.DESC) {
    const reversedSortedData = sortedData.reverse();
    return reversedSortedData;
  }
  return sortedData;
};
