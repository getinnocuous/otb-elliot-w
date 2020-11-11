import React from 'react';
import { FaSortAlphaDown, FaMoneyBillWave, FaStar } from 'react-icons/fa';

export type Icon = 'alpha' | 'money' | 'star' | null;

export const getIcon = (icon: Icon): JSX.Element | null => {
  switch (icon) {
    case 'alpha':
      return <FaSortAlphaDown />;
    case 'money':
      return <FaMoneyBillWave />;
    case 'star':
      return <FaStar />;
    default:
      return null;
  }
};
