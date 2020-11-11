import React from 'react';
import { SortResultsByOptions } from '../../types/';
import { SortButton } from '../../components/SortButton';
import { SortResultsContainer } from './SortResults.styled';

interface SortResultsProps {
  sortResultsBy: SortResultsByOptions;
  setSortResultsBy: React.Dispatch<React.SetStateAction<SortResultsByOptions>>;
}

export const SortResults = ({ sortResultsBy, setSortResultsBy }: SortResultsProps): JSX.Element => {
  return (
    <SortResultsContainer>
      <SortButton
        isActive={sortResultsBy === SortResultsByOptions.ALPHABETICALLY}
        text={'sort'}
        bold={'alphabetically'}
        onClick={() => setSortResultsBy(SortResultsByOptions.ALPHABETICALLY)}
      />
      <SortButton
        isActive={sortResultsBy === SortResultsByOptions.PRICE}
        text={'sort by'}
        bold={'price'}
        onClick={() => setSortResultsBy(SortResultsByOptions.PRICE)}
      />
      <SortButton
        isActive={sortResultsBy === SortResultsByOptions.STAR_RATING}
        text={'sort by'}
        bold={'star rating'}
        onClick={() => setSortResultsBy(SortResultsByOptions.STAR_RATING)}
      />
    </SortResultsContainer>
  );
};
