import { Hotel } from '../types';
import HotelImage1 from '../images/hotel-image-1.png';
import HotelImage2 from '../images/hotel-image-2.png';
import HotelImage3 from '../images/hotel-image-3.png';

export const hotels: Hotel[] = [
  {
    name: 'Iberostar Grand Salome',
    location: 'Costa Adeje, Tenerife',
    rating: 5,
    partySize: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    bookingDetails: {
      startDate: '3rd July 2019',
      length: '7 days',
      departingFrom: 'East Midlands',
    },
    price: 1136.5,
    overview:
      'This resort is located on the coast, between Playa del Duque and Playa de Fanabe. It lies 4 km from the town centre of Adeje. This hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs, if you want to enjoy this endless luxury with your partner or friends.',
    image: HotelImage1,
  },
  {
    name: 'Aguamarina Golf Hotel',
    location: 'Costa Adeje, Tenerife',
    rating: 4,
    partySize: {
      adults: 2,
      children: 1,
    },
    bookingDetails: {
      startDate: '27th May 2019',
      length: '7 days',
      departingFrom: 'Liverpool',
    },
    price: 696.8,
    overview:
      'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    image: HotelImage2,
  },
  {
    name: 'Las Piramides Resot',
    location: 'Costa Adeje, Tenerife',
    rating: 3,
    partySize: {
      adults: 2,
      children: 2,
    },
    bookingDetails: {
      startDate: '3rd July 2019',
      length: '7 days',
      departingFrom: 'Manchester',
    },
    price: 499.99,
    overview:
      'Hugely popular with the young and lively crowd, the Las Piramides Resort offers simple, budget accommodation for those looking to be right in the heart of the action. At just 350m from the famous Veronicas Strip and 50m from the nearest shops, bars and restaurants, the property is perfectly located for nights out on the town. There’s also an outdoor swimming pool that is perfect for a chill-out session too.',
    image: HotelImage3,
  },
];
