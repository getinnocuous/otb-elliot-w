import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Hotel, SortResultsByOptions } from './types';
import { hotels } from './data/hotels';
import { HotelAdvert } from './components/HotelAdvert';

function App(): JSX.Element {
  const [sortResultsBy, setSortResultsBy] = useState<SortResultsByOptions>(SortResultsByOptions.PRICE);
  const [hotelsData, setHotelsData] = useState<Hotel[]>(hotels);
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
        <section>
          {hotelsData.map((hotel) => (
            <HotelAdvert key={hotel.name} hotel={hotel} />
          ))}
        </section>
      </>
    </ThemeProvider>
  );
}

export default App;
