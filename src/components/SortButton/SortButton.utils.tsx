import React from 'react';
import { FaSortAlphaDown, FaSortAlphaDownAlt, FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa';
import { Direction, SortResultsByOptions } from '../../types';

export const getIcon = (type: SortResultsByOptions, direction: Direction): JSX.Element | null => {
  switch (type) {
    case SortResultsByOptions.ALPHABETICALLY:
      return direction === Direction.ASC ? <FaSortAlphaDown size={20} /> : <FaSortAlphaDownAlt size={20} />;
    case SortResultsByOptions.STAR_RATING:
    case SortResultsByOptions.PRICE:
      return direction === Direction.ASC ? <FaSortAmountDownAlt size={20} /> : <FaSortAmountDown size={20} />;
    default:
      return null;
  }
};
