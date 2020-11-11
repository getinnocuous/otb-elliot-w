import React from 'react';
import { FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';
import { Direction, SortResultsByOptions } from '../../types';

export const getIcon = (type: SortResultsByOptions, direction: Direction): JSX.Element | null => {
  switch (type) {
    case SortResultsByOptions.ALPHABETICALLY:
      return direction === Direction.ASC ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />;
    case SortResultsByOptions.STAR_RATING:
    case SortResultsByOptions.PRICE:
      return direction === Direction.ASC ? <FaSortAmountUpAlt /> : <FaSortAmountDown />;
    default:
      return null;
  }
};
