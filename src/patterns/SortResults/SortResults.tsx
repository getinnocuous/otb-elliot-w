import React from 'react';
import { SortResultsByOptions, Sortable } from '../../types/';
import { SortButton } from '../../components/SortButton';
import { SortResultsContainer } from './SortResults.styled';

interface SortResultsProps {
  currentSort: SortResultsByOptions;
  onClick: (option: SortResultsByOptions) => void;
  sortResultsBy: Sortable;
}

export const SortResults = ({ sortResultsBy, currentSort, onClick }: SortResultsProps): JSX.Element => {
  return (
    <SortResultsContainer>
      <SortButton
        isActive={currentSort === SortResultsByOptions.ALPHABETICALLY}
        text={'sort'}
        bold={'alphabetically'}
        onClick={() => onClick(SortResultsByOptions.ALPHABETICALLY)}
        direction={sortResultsBy.ALPHABETICALLY.direction}
        type={SortResultsByOptions.ALPHABETICALLY}
      />
      <SortButton
        isActive={currentSort === SortResultsByOptions.PRICE}
        text={'sort by'}
        bold={'price'}
        onClick={() => onClick(SortResultsByOptions.PRICE)}
        direction={sortResultsBy.PRICE.direction}
        type={SortResultsByOptions.PRICE}
      />
      <SortButton
        isActive={currentSort === SortResultsByOptions.STAR_RATING}
        text={'sort by'}
        bold={'star rating'}
        onClick={() => onClick(SortResultsByOptions.STAR_RATING)}
        direction={sortResultsBy.STAR_RATING.direction}
        type={SortResultsByOptions.STAR_RATING}
      />
    </SortResultsContainer>
  );
};
