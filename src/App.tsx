import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Hotel, SortResultsByOptions } from './types';
import { hotels } from './data/hotels';
import { HotelAdvert } from './components/HotelAdvert';
import { sortHotels } from './utils/utils';

function App(): JSX.Element {
  const [sortResultsBy, setSortResultsBy] = useState<SortResultsByOptions>(SortResultsByOptions.PRICE);
  const [hotelsData, setHotelsData] = useState<Hotel[]>(sortHotels(hotels, sortResultsBy));

  useEffect(() => {
    setHotelsData(sortHotels(hotels, sortResultsBy));
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
