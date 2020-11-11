import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Direction, Hotel, Sortable, SortResultsByOptions } from './types';
import { hotels } from './data/hotels';
import { sortHotels } from './utils/utils';
import { SortResults } from './patterns/SortResults';
import { ResultsList } from './patterns/ResultsList';

export const SORTABLE_FIELDS: Sortable = {
  [SortResultsByOptions.PRICE]: {
    direction: Direction.DESC,
    keyName: 'price',
  },
  [SortResultsByOptions.ALPHABETICALLY]: {
    direction: Direction.ASC,
    keyName: 'name',
  },
  [SortResultsByOptions.STAR_RATING]: {
    direction: Direction.DESC,
    keyName: 'rating',
  },
};

function App(): JSX.Element {
  const [currentSort, setCurrentSort] = useState<SortResultsByOptions>(SortResultsByOptions.PRICE);
  const [sortResultsBy, setSortResultsBy] = useState<Sortable>(SORTABLE_FIELDS);
  const [hotelsData, setHotelsData] = useState<Hotel[]>(sortHotels(hotels, sortResultsBy[currentSort]));

  useEffect(() => {
    setHotelsData(sortHotels(hotels, sortResultsBy[currentSort]));
  }, [currentSort]);

  const handleSortClick = (clickedOption: SortResultsByOptions) => {
    const { keyName, direction } = sortResultsBy[clickedOption];
    if (clickedOption === currentSort) {
      setSortResultsBy({
        ...sortResultsBy,
        [clickedOption]: {
          keyName,
          direction: direction === Direction.ASC ? Direction.DESC : Direction.ASC,
        },
      });
    }
    setCurrentSort(clickedOption);
  };

  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <main>
          <SortResults sortResultsBy={sortResultsBy} currentSort={currentSort} onClick={handleSortClick} />
          <ResultsList hotelsData={hotelsData} />
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
