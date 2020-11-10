import React from 'react';
import { Button } from './SortButton.styled';

interface SortButtonProps {
  onClick: () => void;
  text: string;
  bold: string;
  isActive: boolean;
}

export const SortButton = ({ isActive, onClick, text, bold }: SortButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {text} <b>{bold}</b>
    </Button>
  );
};
