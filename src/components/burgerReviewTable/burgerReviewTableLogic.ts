import BurgerReviewAction from '@src/burgerReviewAction';
import { BurgerReview } from '@src/types/burgerReviewTypes';

export default class BurgerReviewTableLogic {
  allBurgerReviews: BurgerReview[];
  burgerReviewAction: BurgerReviewAction;

  constructor(burgerReviewAction: BurgerReviewAction) {
    this.burgerReviewAction = burgerReviewAction;
    this.setAllBurgerReviews();
  }

  setAllBurgerReviews = () => {
    this.allBurgerReviews = this.burgerReviewAction.getAllBurgerReviews();
  };
}
