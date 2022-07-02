import BurgerAction from '@src/burgerAction';
import { BurgerReview } from '@src/types/burgerTypes';
import BurgerTableLogic from './burgerTable/burgerTableLogic';

export default class BurgerLogic {
  burgerActions: BurgerAction;
  burgerTableLogic: BurgerTableLogic;
  newBurgerReview: BurgerReview = undefined;

  constructor(burgerActions: BurgerAction) {
    this.burgerActions = burgerActions;
    this.burgerTableLogic = new BurgerTableLogic(burgerActions);
    this.setNewestBurgerReview();
  }

  setNewestBurgerReview = () => {
    const newBurgerReview: BurgerReview = this.burgerActions.getNewestBurgerReview();
    this.newBurgerReview = newBurgerReview;
  };
}
