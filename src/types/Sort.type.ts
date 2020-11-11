import { Direction } from './Direction.type';
import { HotelKey } from './HotelKey.type';

export enum SortResultsByOptions {
  ALPHABETICALLY = 'ALPHABETICALLY',
  PRICE = 'PRICE',
  STAR_RATING = 'STAR_RATING',
}

export type Sortable = {
  [key in SortResultsByOptions]: SortState;
};

export interface SortState {
  direction: Direction;
  keyName: HotelKey;
}
