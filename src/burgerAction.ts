import BurgerService from './service/burgerService';
import { BurgerReview } from './types/burgerTypes';

export default class BurgerAction {
  burgerService: BurgerService;
  constructor() {
    this.burgerService = new BurgerService();
  }

  getNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerService.getNewestBurgerReviewRequest();
    return newBurgerReview;
  };

  getAllBurgerReviews = () => {
    const allBurgerReviews: BurgerReview[] = this.burgerService.getAllBurgerReviewsRequest();
    return allBurgerReviews;
  };
}
