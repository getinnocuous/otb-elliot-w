import React from 'react';
import { Button } from './BookNowButton.styled';

interface BookNowButtonProps {
  price: number;
  href: string;
}

export const BookNowButton = ({ price, href }: BookNowButtonProps): JSX.Element => (
  <Button href={href}>
    <span className="cta">Book now</span>
    <span className="price">
      {price.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}
    </span>
  </Button>
);
