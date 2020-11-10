import React, { useEffect, useState } from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';
import { Hotel, SortResultsByOptions } from './types';
import { hotels } from './data/hotels';
import { HotelAdvert } from './components/HotelAdvert';
import { SortButton } from './components/SortButton';
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
