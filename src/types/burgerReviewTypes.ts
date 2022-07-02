export interface BurgerReview {
  id: string;
  burger: Burger;
  review: Review;
  burgerResturant: BurgerResturant;
}

export interface Burger {
  id: string;
  name: string;
  price: number;
  pictures: string[];
}

export interface Review {
  id: string;
  taste: number;
  texture: number;
  visualPresentation: number;
  reviewer: string;
  reviewDate: Date;
}

export interface BurgerResturant {
  id: string;
  name: string;
  town: string;
  streetName: string;
  streetnumber: string;
}
