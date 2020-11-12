import React from 'react';
import { FaStar } from 'react-icons/fa';
import { getArrayFromAmount } from '../../utils/';
import { StarRatingContainer } from './StarRating.styled';

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
  return (
    <StarRatingContainer>
      {getArrayFromAmount(rating).map((i: number) => (
        <li key={i}>
          <FaStar size={16} />
        </li>
      ))}
    </StarRatingContainer>
  );
};
