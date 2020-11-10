import React, { useState } from 'react';
import { Hotel } from '../../types';
import HotelImage1 from '../../images/hotel-image-1.png';
// import HotelImage2 from '../../images/hotel-image-2.png';
// import HotelImage3 from '../../images/hotel-image-3.png';

interface HotelAdvertProps {
  hotel: Hotel;
}

export const HotelAdvert = ({ hotel }: HotelAdvertProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const { name, location, rating, partySize, bookingDetails, price, overview } = hotel;
  const { adults, children, infants } = partySize;
  const { startDate, length, departingFrom } = bookingDetails;
  return (
    <article key={name}>
      <div>
        <div>
          <img src={HotelImage1} alt={name} />
          <button onClick={() => setToggle(!toggle)}>Read {toggle ? 'less' : 'more'} about this hotel</button>
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{location}</h2>
          <div>{rating}</div>
          <p>
            {adults} Adults,
            {children && children > 1 ? `${children} children` : `${children} child`}
            {infants && `& ${infants} infant`}
          </p>
          <p>
            {startDate} for {length} <br />
            departing from {departingFrom}
          </p>
          <a href={'/'}>
            <span>Book now</span>
            <span>
              {price.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}
            </span>
          </a>
        </div>
      </div>
      <div>
        <p>{overview}</p>
      </div>
    </article>
  );
};
