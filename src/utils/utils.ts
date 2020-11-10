import { SortResultsByOptions, Hotel } from '../types';

enum Direction {
  ASC,
  DESC,
}

interface SortType {
  key: 'name' | 'rating' | 'price';
  direction?: Direction;
}

const getKeyAndDirection = (order: SortResultsByOptions): SortType => {
  switch (order) {
    case SortResultsByOptions.ALPHABETICALLY:
      return {
        key: 'name',
      };
    case SortResultsByOptions.STAR_RATING:
      return {
        key: 'rating',
        direction: Direction.DESC,
      };
    case SortResultsByOptions.PRICE:
    default:
      return {
        key: 'price',
        direction: Direction.DESC,
      };
  }
};

export const sortHotels = (data: Hotel[], order: SortResultsByOptions): Hotel[] => {
  const { direction, key } = getKeyAndDirection(order);
  const sortedData = data.sort((a, b) => {
    const keyA = a[key];
    const keyB = b[key];
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
