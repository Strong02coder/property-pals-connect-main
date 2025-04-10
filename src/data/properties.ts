
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq ft
    yearBuilt: number;
    propertyType: 'apartment' | 'house' | 'condo' | 'townhouse' | 'land';
    status: 'for-sale' | 'for-rent' | 'sold' | 'pending';
  };
  amenities: string[];
  images: string[];
  agent: {
    id: string;
    name: string;
    email: string;
    phone: string;
    image?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Apartment with Ocean View',
    description: 'Experience luxury living in this modern apartment with breathtaking ocean views. This recently renovated unit features an open floor plan, high-end finishes, and state-of-the-art appliances. The floor-to-ceiling windows offer abundant natural light and panoramic views of the coastline. Located in a prestigious building with 24/7 security, pool, gym, and concierge service.',
    price: 850000,
    location: {
      address: '123 Coastal Drive',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      country: 'USA',
      latitude: 25.761681,
      longitude: -80.191788,
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      yearBuilt: 2018,
      propertyType: 'apartment',
      status: 'for-sale',
    },
    amenities: ['Ocean View', 'Swimming Pool', 'Gym', 'Concierge', 'Parking', 'Security System', 'Elevator', 'Air Conditioning'],
    images: [
      'https://source.unsplash.com/random/1200x800/?luxury,apartment',
      'https://source.unsplash.com/random/1200x800/?modern,kitchen',
      'https://source.unsplash.com/random/1200x800/?bedroom,luxury',
      'https://source.unsplash.com/random/1200x800/?bathroom,modern',
      'https://source.unsplash.com/random/1200x800/?living,room',
    ],
    agent: {
      id: 'a1',
      name: 'Sarah Johnson',
      email: 'sarah.j@propertypals.com',
      phone: '(555) 123-4567',
      image: 'https://source.unsplash.com/random/200x200/?woman,professional',
    },
    createdAt: '2025-03-15T09:00:00Z',
    updatedAt: '2025-04-01T14:30:00Z',
  },
  {
    id: '2',
    title: 'Spacious Family Home in Suburban Neighborhood',
    description: 'Perfect for a growing family, this spacious home is situated in a quiet, family-friendly neighborhood with excellent schools nearby. The house features a large backyard, updated kitchen, and comfortable living spaces. The finished basement provides additional recreational space. Two-car garage and ample storage throughout.',
    price: 495000,
    location: {
      address: '456 Maple Street',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA',
      latitude: 35.227085,
      longitude: -80.843124,
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      yearBuilt: 2005,
      propertyType: 'house',
      status: 'for-sale',
    },
    amenities: ['Backyard', 'Garage', 'Basement', 'Fireplace', 'Central Heating', 'Central Air', 'Patio', 'Garden'],
    images: [
      'https://source.unsplash.com/random/1200x800/?suburban,house',
      'https://source.unsplash.com/random/1200x800/?backyard,house',
      'https://source.unsplash.com/random/1200x800/?kitchen,family',
      'https://source.unsplash.com/random/1200x800/?bedroom,family',
      'https://source.unsplash.com/random/1200x800/?living,traditional',
    ],
    agent: {
      id: 'a2',
      name: 'Michael Rodriguez',
      email: 'michael.r@propertypals.com',
      phone: '(555) 987-6543',
      image: 'https://source.unsplash.com/random/200x200/?man,realtor',
    },
    createdAt: '2025-03-18T10:15:00Z',
    updatedAt: '2025-03-29T16:45:00Z',
  },
  {
    id: '3',
    title: 'Downtown Loft with Industrial Charm',
    description: 'Live in the heart of the city in this stylish loft featuring exposed brick walls, high ceilings, and oversized windows. This renovated space perfectly blends historic character with modern amenities. Walking distance to restaurants, shops, and entertainment venues.',
    price: 399000,
    location: {
      address: '789 Urban Avenue',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      country: 'USA',
      latitude: 45.523064,
      longitude: -122.676483,
    },
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 1100,
      yearBuilt: 1935,
      propertyType: 'condo',
      status: 'for-sale',
    },
    amenities: ['Exposed Brick', 'High Ceilings', 'Stainless Steel Appliances', 'Hardwood Floors', 'Rooftop Access', 'In-unit Laundry', 'Smart Home System'],
    images: [
      'https://source.unsplash.com/random/1200x800/?loft,industrial',
      'https://source.unsplash.com/random/1200x800/?loft,living',
      'https://source.unsplash.com/random/1200x800/?industrial,kitchen',
      'https://source.unsplash.com/random/1200x800/?modern,bedroom',
      'https://source.unsplash.com/random/1200x800/?bathroom,industrial',
    ],
    agent: {
      id: 'a3',
      name: 'Emily Chen',
      email: 'emily.c@propertypals.com',
      phone: '(555) 345-6789',
      image: 'https://source.unsplash.com/random/200x200/?woman,asian',
    },
    createdAt: '2025-03-20T11:30:00Z',
    updatedAt: '2025-04-02T09:15:00Z',
  },
  {
    id: '4',
    title: 'Elegant Townhouse with Private Garden',
    description: 'This elegant townhouse offers sophisticated urban living with a private garden retreat. Featuring premium finishes, an updated kitchen, and three floors of living space. The primary suite includes a luxurious bathroom and walk-in closet. Conveniently located near parks, schools, and transportation.',
    price: 675000,
    location: {
      address: '321 Parkview Lane',
      city: 'Boston',
      state: 'MA',
      zip: '02108',
      country: 'USA',
      latitude: 42.357575,
      longitude: -71.061795,
    },
    features: {
      bedrooms: 3,
      bathrooms: 2.5,
      area: 2200,
      yearBuilt: 1995,
      propertyType: 'townhouse',
      status: 'for-sale',
    },
    amenities: ['Private Garden', 'Hardwood Floors', 'Fireplace', 'Walk-in Closet', 'Balcony', 'Granite Countertops', 'Energy Efficient Windows', 'Garage'],
    images: [
      'https://source.unsplash.com/random/1200x800/?townhouse,elegant',
      'https://source.unsplash.com/random/1200x800/?garden,private',
      'https://source.unsplash.com/random/1200x800/?elegant,kitchen',
      'https://source.unsplash.com/random/1200x800/?master,bedroom',
      'https://source.unsplash.com/random/1200x800/?bathroom,luxury',
    ],
    agent: {
      id: 'a4',
      name: 'David Thompson',
      email: 'david.t@propertypals.com',
      phone: '(555) 234-5678',
      image: 'https://source.unsplash.com/random/200x200/?man,business',
    },
    createdAt: '2025-03-22T14:00:00Z',
    updatedAt: '2025-04-05T10:30:00Z',
  },
  {
    id: '5',
    title: 'Mountain View Cabin with Modern Amenities',
    description: 'Escape to this charming cabin with breathtaking mountain views and modern comforts. This recently updated retreat features an open concept living area with a stone fireplace, a well-appointed kitchen, and a wraparound deck perfect for outdoor entertaining. Situated on 5 acres with hiking trails and a small stream.',
    price: 425000,
    location: {
      address: '567 Mountain Ridge Road',
      city: 'Asheville',
      state: 'NC',
      zip: '28801',
      country: 'USA',
      latitude: 35.595058,
      longitude: -82.551487,
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1600,
      yearBuilt: 2010,
      propertyType: 'house',
      status: 'for-sale',
    },
    amenities: ['Mountain View', 'Fireplace', 'Deck', 'Acreage', 'Hiking Trails', 'Stream', 'Wood Floors', 'Updated Kitchen'],
    images: [
      'https://source.unsplash.com/random/1200x800/?cabin,mountains',
      'https://source.unsplash.com/random/1200x800/?cabin,interior',
      'https://source.unsplash.com/random/1200x800/?rustic,kitchen',
      'https://source.unsplash.com/random/1200x800/?mountain,view',
      'https://source.unsplash.com/random/1200x800/?cabin,deck',
    ],
    agent: {
      id: 'a5',
      name: 'Jessica Williams',
      email: 'jessica.w@propertypals.com',
      phone: '(555) 876-5432',
      image: 'https://source.unsplash.com/random/200x200/?woman,outdoors',
    },
    createdAt: '2025-03-25T08:45:00Z',
    updatedAt: '2025-04-07T13:15:00Z',
  },
  {
    id: '6',
    title: 'Luxury Waterfront Condo with Marina Access',
    description: 'Experience the ultimate waterfront lifestyle in this luxurious condo with direct marina access. This impeccably designed unit features premium finishes, an open concept floor plan, and a gourmet kitchen. The spacious balcony offers stunning views of the marina and water. Building amenities include a pool, fitness center, and 24-hour concierge.',
    price: 925000,
    location: {
      address: '888 Marina Boulevard',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
      country: 'USA',
      latitude: 32.715736,
      longitude: -117.161087,
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1750,
      yearBuilt: 2019,
      propertyType: 'condo',
      status: 'for-sale',
    },
    amenities: ['Waterfront', 'Marina Access', 'Balcony', 'Pool', 'Fitness Center', 'Concierge', 'Security System', 'Parking', 'Pet Friendly'],
    images: [
      'https://source.unsplash.com/random/1200x800/?waterfront,condo',
      'https://source.unsplash.com/random/1200x800/?marina,view',
      'https://source.unsplash.com/random/1200x800/?luxury,kitchen',
      'https://source.unsplash.com/random/1200x800/?modern,bedroom',
      'https://source.unsplash.com/random/1200x800/?balcony,view',
    ],
    agent: {
      id: 'a6',
      name: 'Robert Jackson',
      email: 'robert.j@propertypals.com',
      phone: '(555) 765-4321',
      image: 'https://source.unsplash.com/random/200x200/?man,suit',
    },
    createdAt: '2025-03-27T15:30:00Z',
    updatedAt: '2025-04-08T11:45:00Z',
  },
];

export const getProperties = (): Property[] => {
  return properties;
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getRecentProperties = (limit: number = 3): Property[] => {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getFeaturedProperties = (limit: number = 3): Property[] => {
  // For now, just return some properties as featured
  return properties.slice(0, limit);
};
