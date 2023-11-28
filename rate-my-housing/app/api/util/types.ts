// models.ts

interface User {
    email: string;
    user_id: string;
  }
  
  interface Listing {
    name: string;
    management: string;
    state: string;
    town: string;
    zip: number;
    address: string;
    listing_id: string;
    reviews: Review[];
  }
  
  interface Review {
    text_review: string;
    kitchen: number;
    tag: any;
    bathroom: number;
    parking: number;
    location: number;
    pet: number;
    storage: number;
    laundry: number;
    review_id: string;
  }

interface ListingDTO extends Listing {
  // Add computed fields here
  averageRatings: { [key: string]: number }; // Object to store average ratings per attribute
  overallRating: number; // Overall computed rating
}

function computeAverageRatings(reviews: Review[]): { [key: string]: number } {
  const averageRatings: { [key: string]: number } = {};

  if (reviews.length === 0) return averageRatings; // Return empty object if no reviews

  const reviewKeys = Object.keys(reviews[0]) as (keyof Review)[]; // Assuming the keys in a review are consistent

  reviewKeys.forEach(key => {
    if (typeof reviews[0][key] === 'number') {
      const ratings = reviews.map(review => review[key] || 0); // Get ratings for each attribute
      const sum = ratings.reduce((acc, rating) => acc + rating, 0); // Sum of ratings
      const average = sum / reviews.length; // Compute average
      averageRatings[key] = average;
    }
  });

  return averageRatings;
}

function computeOverallRating(averageRatings: { [key: string]: number }): number {
  const weights = {
    kitchen: 0.2,
    bathroom: 0.15,
    parking: 0.1,
    location: 0.2,
    pet: 0.1,
    storage: 0.1,
    laundry: 0.15,
  } as { [key: string]: number };

  const weightedSum = Object.keys(averageRatings).reduce(
    (acc, key) => acc + (averageRatings[key] || 0) * (weights[key] || 0),
    0
  );

  const totalWeight = Object.values(weights).reduce((acc, weight) => acc + weight, 0);
  const overallRating = weightedSum / totalWeight;

  return overallRating;
}


export function transformListing(listing: Listing): ListingDTO {
  const averageRatings = computeAverageRatings(listing.reviews);
  const overallRating = computeOverallRating(averageRatings);
  return {
    ...listing,
    averageRatings: averageRatings,
    overallRating: overallRating,
  } as ListingDTO;
}

  
  export type { User, Review, Listing, ListingDTO };
  