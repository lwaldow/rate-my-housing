// constants.ts

import type { User, Listing, Review } from './types';

// Example User objects
const exampleUsers: User[] = [
  { email: 'user1@example.com', user_id: '1' },
  { email: 'user2@example.com', user_id: '2' },
];

// Example Review objects
const exampleReviews: Review[] = [
  {
    text_review: 'Great place!',
    kitchen: 4,
    tag: { tag1: true, tag2: false },
    bathroom: 5,
    parking: 4,
    location: 5,
    pet: 3,
    storage: 4,
    laundry: 5,
    review_id: '101',
  },
  {
    text_review: 'Nice neighborhood',
    kitchen: 3,
    tag: { tag1: true, tag2: true },
    bathroom: 4,
    parking: 3,
    location: 4,
    pet: 4,
    storage: 3,
    laundry: 4,
    review_id: '102',
  },
  {
    text_review: 'Spacious and clean',
    kitchen: 5,
    tag: { tag1: false, tag2: true },
    bathroom: 5,
    parking: 5,
    location: 4,
    pet: 4,
    storage: 5,
    laundry: 5,
    review_id: '103',
  },
];

// Example Listing objects with relationships to Reviews
const exampleListings: Listing[] = [
  {
    name: 'Apartment A',
    management: 'ABC Management',
    state: 'MA',
    town: 'Amherst',
    zip: 12345,
    address: '123 Main St',
    listing_id: '1001',
    reviews: [exampleReviews[0]],
  },
  {
    name: 'House B',
    management: 'XYZ Property',
    state: 'MA',
    town: 'Hadley',
    zip: 54321,
    address: '456 Oak St',
    listing_id: '1002',
    reviews: [exampleReviews[1]],
  },
  {
    name: 'Condo C',
    management: '123 Real Estate',
    state: 'MA',
    town: 'Northampton',
    zip: 98765,
    address: '789 Pine St',
    listing_id: '1003',
    reviews: [exampleReviews[2]],
  },
  // Add more listings as needed
];

export { exampleUsers, exampleListings, exampleReviews };
