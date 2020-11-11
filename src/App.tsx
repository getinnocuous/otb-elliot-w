import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Hotel, SortResultsByOptions } from './types';
import { hotels } from './data/hotels';
import { HotelAdvert } from './patterns/HotelAdvert';
import { sortHotels } from './utils/utils';
import { SortResults } from './patterns/SortResults';

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
        <main>
          <SortResults sortResultsBy={sortResultsBy} setSortResultsBy={setSortResultsBy} />
          <section>
            {hotelsData.map((hotel) => (
              <HotelAdvert key={hotel.name} hotel={hotel} />
            ))}
          </section>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
