import BurgerAction from '@src/burgerAction';
import { BurgerReview } from '@src/types/burgerTypes';

export default class BurgerTableLogic {
  allBurgerReviews: BurgerReview[];
  burgerAction: BurgerAction;

  constructor(burgerAction: BurgerAction) {
    this.burgerAction = burgerAction;
    this.setAllBurgerReviews();
  }

  setAllBurgerReviews = () => {
    this.allBurgerReviews = this.burgerAction.getAllBurgerReviews();
  };
}
