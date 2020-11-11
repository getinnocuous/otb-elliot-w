import React from 'react';
import { Button } from './SortButton.styled';
import { Icon, getIcon } from './SortButton.utils';

interface SortButtonProps {
  onClick: () => void;
  text: string;
  bold: string;
  isActive: boolean;
  icon: Icon;
}

export const SortButton = ({ isActive, onClick, text, bold, icon }: SortButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      <span>{text}</span> <b>{bold}</b> {getIcon(icon)}
    </Button>
  );
};
