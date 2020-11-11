import React from 'react';
import { BookingDetails, PartySize } from '../../types';

export const formatBookingDetails = (partySize: PartySize, bookingDetails: BookingDetails): JSX.Element => {
  const { adults, children, infants } = partySize;
  const { startDate, length, departingFrom } = bookingDetails;
  return (
    <p>
      <b>{adults}</b> Adults, {children && children > 0 && <b>{children}</b>}{' '}
      {children && children > 1 ? `children` : `child`}
      {infants ? (
        infants > 0 ? (
          <>
            {' '}
            &amp; <b>{infants}</b> infants
          </>
        ) : (
          <>
            &amp; <b>{infants}</b> infant
          </>
        )
      ) : null}
      <br />
      <b>{startDate}</b> for <b>{length}</b> <br />
      departing from <b>{departingFrom}</b>
    </p>
  );
};
