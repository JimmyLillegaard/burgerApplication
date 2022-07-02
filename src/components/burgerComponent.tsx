import BurgerAction from '@src/burgerAction';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../shared/style/burgerApp.less';
import BurgerLogic from './burgerLogic';
import NavBar from './navBar/navBar';

type Props = {
  title: string;
  version: string;
  burgerLogic: BurgerLogic;
};

const BurgerComponent: React.FC<Props> = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <main>
        <NavBar />

        <p className='main-teaser'>
          Welcome to the Burger Reviewer.
          <br />
          Here you can either review Burgers or make your own review
        </p>
        <br />
        <p>{props.burgerLogic.newBurgerReview.burger.name}</p>
      </main>
    </React.Fragment>
  );
};

export default hot(module)(BurgerComponent);
