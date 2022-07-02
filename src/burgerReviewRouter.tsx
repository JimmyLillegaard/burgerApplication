import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BurgerReviewLogic from './components/burgerReviewLogic';
import BurgerReviewAction from './burgerReviewAction';
import BurgerReviewComponent from './components/burgerReview';
import NavBar from '../shared/component/navBar/navBar';

const burgerReviewAction = new BurgerReviewAction();
const burgerReviewLogic = new BurgerReviewLogic(burgerReviewAction);

interface Properties {
  title: string;
  version: string;
}

const BurgerReviewRouting: React.FC<Properties> = (props) => {
  return (
    <BrowserRouter>
      <main>
        <NavBar mainTitle='The Burger Reviewer' loginTitle='Login' newUserTitle='New user' />
        <Routes>
          <Route
            path='/'
            element={
              <BurgerReviewComponent
                title={props.title}
                version={props.version}
                burgerLogic={burgerReviewLogic}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default BurgerReviewRouting;
