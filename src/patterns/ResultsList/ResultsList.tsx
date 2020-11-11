import React from 'react';
import { Hotel } from '../../types';
import { HotelAdvert } from '../HotelAdvert';
import { ResultsListContainer } from './ResultsList.styled';
interface ResultsListProps {
  hotelsData: Hotel[];
}

export const ResultsList = ({ hotelsData }: ResultsListProps): JSX.Element => {
  return (
    <ResultsListContainer>
      {hotelsData.map((hotel: Hotel) => (
        <HotelAdvert key={hotel.name} hotel={hotel} />
      ))}
    </ResultsListContainer>
  );
};
