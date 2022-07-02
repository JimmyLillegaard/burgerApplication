import BurgerAction from '@src/burgerAction';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../shared/style/burgerApp.less';
import BurgerLogic from './burgerLogic';
import BurgerTable from './burgerTable/burgerTable';
import NewBurgerReview from './newBurgerReview/newBurgerReview';

type Props = {
  title: string;
  version: string;
  burgerLogic: BurgerLogic;
};

const BurgerComponent: React.FC<Props> = (props) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <p className='main-teaser'>
              Welcome to the Burger Reviewer.
              <br />
              Here you can either review Burgers or make your own review
            </p>
          </div>
          <div className='row'>
            <NewBurgerReview burgerReview={props.burgerLogic.newBurgerReview} />
          </div>
          <div className='row'>
            <div className='googleMapsArea'>Google Maps</div>
          </div>
        </div>
        <div className='col'>
          <BurgerTable burgertableLogic={props.burgerLogic.burgerTableLogic} />
        </div>
      </div>
    </>
  );
};

export default hot(module)(BurgerComponent);
