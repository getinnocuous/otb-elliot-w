import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Hotel } from '../../types';
import {
  HotelAdvertContainer,
  ImageContainer,
  ToggleOverviewButton,
  HotelDetails,
  HotelOverview,
} from './HotelAdvert.styled';
import { formatBookingDetails } from './HotelAdvert.utils';
import { BookNowButton } from '../../components/BookNowButton';
import { StarRating } from '../../components/StarRating';
interface HotelAdvertProps {
  hotel: Hotel;
}

export const HotelAdvert = ({ hotel }: HotelAdvertProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const { name, location, rating, partySize, bookingDetails, price, overview, image } = hotel;

  return (
    <HotelAdvertContainer key={name}>
      <div>
        <ImageContainer>
          <img src={image} alt={name} />
          <ToggleOverviewButton onClick={() => setToggle(!toggle)} toggle={toggle}>
            <b>Read {toggle ? 'less' : 'more'}</b> about this hotel <FaChevronRight size={14} />
          </ToggleOverviewButton>
        </ImageContainer>
      </div>
      <HotelDetails>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <StarRating rating={rating} />
        {formatBookingDetails(partySize, bookingDetails)}
        <BookNowButton href={'/'} price={price} />
      </HotelDetails>
      <HotelOverview>
        {toggle && (
          <div className={'inner'}>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
        )}
      </HotelOverview>
    </HotelAdvertContainer>
  );
};
