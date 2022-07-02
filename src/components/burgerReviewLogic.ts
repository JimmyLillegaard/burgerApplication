import BurgerReviewAction from '@src/burgerReviewAction';
import { BurgerReview } from '@src/types/burgerReviewTypes';
import BurgerReviewTableLogic from './burgerReviewTable/burgerReviewTableLogic';

export default class BurgerLogic {
  burgerReviewActions: BurgerReviewAction;
  burgerReviewTableLogic: BurgerReviewTableLogic;
  newBurgerReview: BurgerReview = undefined;

  constructor(burgerReviewActions: BurgerReviewAction) {
    this.burgerReviewActions = burgerReviewActions;
    this.burgerReviewTableLogic = new BurgerReviewTableLogic(burgerReviewActions);
    this.setNewestBurgerReview();
  }

  setNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerReviewActions.getNewestBurgerReview();
    this.newBurgerReview = newBurgerReview;
  };
}
