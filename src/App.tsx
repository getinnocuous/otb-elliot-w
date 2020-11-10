import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { SortResultsByOptions } from './types';

function App(): JSX.Element {
  const [sortResultsBy, setSortResultsBy] = useState<SortResultsByOptions>(SortResultsByOptions.PRICE);
  useEffect(() => {
    console.log({ sortResultsBy });
  }, [sortResultsBy]);
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <div>
          <button onClick={() => setSortResultsBy(SortResultsByOptions.ALPHABETICALLY)}>
            sort <b>alphabetically</b>
          </button>
          <button onClick={() => setSortResultsBy(SortResultsByOptions.PRICE)}>
            sort by <b>price</b>
          </button>
          <button onClick={() => setSortResultsBy(SortResultsByOptions.STAR_RATING)}>
            sort by <b>star rating</b>
          </button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
