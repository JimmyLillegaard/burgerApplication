import BurgerAction from '@src/burgerAction';
import { BurgerReview } from '@src/types/burgerTypes';

export default class BurgerLogic {
  burgerActions: BurgerAction;
  newBurgerReview: BurgerReview = undefined;

  constructor(burgerActions: BurgerAction) {
    this.burgerActions = burgerActions;
    this.setNewestBurgerReview();
  }

  setNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerActions.getNewestBurgerReview();
    this.newBurgerReview = newBurgerReview;
  };
}
