import BurgerReviewAction from '@src/burgerReviewAction';
import { BurgerReview } from '@src/types/burgerReviewTypes';

export default class BurgerLogic {
  burgerReviewActions: BurgerReviewAction;
  newBurgerReview: BurgerReview = undefined;
  allBurgerReviews: BurgerReview[];

  constructor(burgerReviewActions: BurgerReviewAction) {
    this.burgerReviewActions = burgerReviewActions;
    this.setNewestBurgerReview();
    this.setAllBurgerReviews();
  }

  setNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerReviewActions.getNewestBurgerReview();
    this.newBurgerReview = newBurgerReview;
  };

  setAllBurgerReviews = () => {
    this.allBurgerReviews = this.burgerReviewActions.getAllBurgerReviews();
  };
}
