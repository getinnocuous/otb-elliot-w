export interface Hotel {
  name: string;
  location: string;
  rating: number;
  partySize: PartySize;
  bookingDetails: BookingDetails;
  price: number;
  overview: string;
  image: string;
}

export interface PartySize {
  adults: number;
  children?: number;
  infants?: number;
}

export interface BookingDetails {
  startDate: string;
  length: string;
  departingFrom: string;
}
