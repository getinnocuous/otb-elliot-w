import React from 'react';
import { Direction, SortResultsByOptions } from '../../types';
import { Button } from './SortButton.styled';
import { getIcon } from './SortButton.utils';

interface SortButtonProps {
  onClick: () => void;
  text: string;
  bold: string;
  isActive: boolean;
  direction: Direction;
  type: SortResultsByOptions;
}

export const SortButton = ({ isActive, onClick, text, bold, direction, type }: SortButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      <span>{text}</span> <b>{bold}</b> {getIcon(type, direction)}
    </Button>
  );
};
