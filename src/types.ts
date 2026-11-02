export type Language = 'en' | 'bn' | 'hi';

export type PageRoute =
  | 'home'
  | 'our-story'
  | 'specialties'
  | 'menu'
  | 'reservations'
  | 'reviews'
  | 'contact';

export type DishCategory = 'all' | 'fish' | 'meat' | 'veg' | 'dessert';

export interface Dish {
  id: string;
  name: string;
  bengaliSub: string;
  price: number;
  category: Exclude<DishCategory, 'all'>;
  badgeText: string;
  badgeTone: 'primary' | 'secondary';
  bottomTag: string;
  description: string;
  image: string;
  imageAlt: string;
  isSattvic?: boolean;
  // Modal Lore & Sommelier Pairings
  vessel: string;
  dietaryTag: string;
  spiceLevel: string;
  lore: string;
  originPlace: string;
  technique: string;
  sharbatPairing: {
    name: string;
    notes: string;
  };
  winePairing: {
    name: string;
    notes: string;
  };
}

export interface ThaliCourse {
  courseLabel: string;
  itemName: string;
  bengaliName: string;
  detail: string;
}

export interface ThaliExperience {
  id: string;
  title: string;
  bengaliTitle: string;
  subtitle: string;
  price: number;
  serves: string;
  badge: string;
  isSattvic?: boolean;
  image: string;
  courses: ThaliCourse[];
}

export interface ClassicMenuItem {
  id: string;
  name: string;
  bengaliName: string;
  description: string;
  price: number;
  section: 'shukto-bhaja' | 'river-harvest' | 'hearth-curries' | 'sharbats-mishti';
  isSattvic?: boolean;
  tag?: string;
}

export interface WishlistItem {
  id: string;
  name: string;
  bengaliSub: string;
  price: number;
  quantity: number;
  type: 'dish' | 'thali';
}

export interface ReservationRecord {
  refId: string;
  guestName: string;
  phone: string;
  date: string;
  slot: string;
  guests: string;
  seatingStyle: string;
  notes: string;
  kitchenWalkthrough?: boolean;
  wishlistSummary?: string[];
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  body: string;
  initials: string;
  avatarTone: 'secondary' | 'primary' | 'gold';
  author: string;
  roleLocation: string;
  rating: number;
  experienceTag: 'Hilsa & Seafood' | 'Clay Handi Meats' | 'Low Pirhi Seating' | 'Sattvic & Family Bhoj';
  dateLabel: string;
}
