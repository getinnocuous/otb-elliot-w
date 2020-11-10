export interface Hotel {
  name: string;
  location: string;
  rating: number;
  partySize: {
    adults: number;
    children?: number;
    infants?: number;
  };
  bookingDetails: {
    startDate: string;
    length: string;
    departingFrom: string;
  };
  price: number;
  overview: string;
}
