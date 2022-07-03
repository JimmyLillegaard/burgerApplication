import BurgerAction from '@src/burgerAction';
import { BurgerReview } from '@src/types/burgerReviewType';

export default class BurgerLogic {
  burgerReviewActions: BurgerAction;
  newBurgerReview: BurgerReview = undefined;
  allBurgerReviews: BurgerReview[];

  constructor(burgerReviewActions: BurgerAction) {
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
