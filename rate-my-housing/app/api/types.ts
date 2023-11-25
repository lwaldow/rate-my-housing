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
  
  export type { User, Listing, Review };
  