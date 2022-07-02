import React from 'react';
import { hot } from 'react-hot-loader';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../shared/style/burgerApp.less';
import BurgerReviewTable from './burgerReviewTable/burgerReviewTable';
import NewBurgerReview from './newBurgerReview/newBurgerReview';
import BurgerReviewLogic from './burgerReviewLogic';

type Props = {
  title: string;
  version: string;
  burgerReviewLogic: BurgerReviewLogic;
};

const BurgerReview: React.FC<Props> = (props) => {
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
            <NewBurgerReview burgerReview={props.burgerReviewLogic.newBurgerReview} />
          </div>
          <div className='row'>
            <div className='googleMapsArea'>Google Maps</div>
          </div>
        </div>
        <div className='col'>
          <BurgerReviewTable allBurgerReviews={props.burgerReviewLogic.allBurgerReviews} />
        </div>
      </div>
    </>
  );
};

export default hot(module)(BurgerReview);
