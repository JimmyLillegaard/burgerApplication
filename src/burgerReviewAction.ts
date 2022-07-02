import BurgerReviewService from './service/burgerReviewService';
import { BurgerReview } from './types/burgerReviewTypes';

export default class BurgerReviewAction {
  burgerReviewService: BurgerReviewService;
  constructor() {
    this.burgerReviewService = new BurgerReviewService();
  }

  getNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerReviewService.getNewestBurgerReviewRequest();
    return newBurgerReview;
  };

  getAllBurgerReviews = () => {
    const allBurgerReviews: BurgerReview[] = this.burgerReviewService.getAllBurgerReviewsRequest();
    return allBurgerReviews;
  };
}
