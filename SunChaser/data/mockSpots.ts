export interface Spot {
  id: string;
  name: string;
  description: string;
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
  rating: number;
  imageUrl: string;
}

export const mockSpots: Spot[] = [
  {
    id: '1',
    name: 'Griffith Observatory Sunrise',
    description: 'A classic spot in Los Angeles offering panoramic views of the city and the Hollywood sign. The sunrise from here is breathtaking.',
    location: {
      name: 'Griffith Observatory, Los Angeles',
      latitude: 34.1184,
      longitude: -118.3004,
    },
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1539622106124-6161b964344e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Santa Monica Pier Sunset',
    description: 'Enjoy the vibrant colors of the sunset over the Pacific Ocean from the iconic Santa Monica Pier.',
    location: {
      name: 'Santa Monica Pier, Santa Monica',
      latitude: 34.0103,
      longitude: -118.4962,
    },
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Grand Canyon Sunset Point',
    description: 'One of the most famous sunset spots in the world. The changing colors of the canyon walls are a sight to behold.',
    location: {
      name: 'Mather Point, Grand Canyon',
      latitude: 36.0595,
      longitude: -112.1095,
    },
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1474044224458-95f1a5b2d716?q=80&w=2070&auto=format&fit=crop',
  },
];
