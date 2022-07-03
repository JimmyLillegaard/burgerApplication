import BurgerReviewService from './service/burgerReviewService';
import { BurgerReview } from './types/burgerReviewType';

export default class BurgerAction {
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
