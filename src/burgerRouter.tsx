import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BurgerLogic from './components/burgerReview/burgerReviewLogic';
import BurgerAction from './burgerAction';
import BurgerReview from './components/burgerReview/burgerReview';
import NavBar from '../shared/component/navBar/navBar';
import BurgerLogin from './components/burgerLogin/burgerLogin';

const burgerAction = new BurgerAction();
const burgerLogic = new BurgerLogic(burgerAction);

interface Properties {
  title: string;
  version: string;
}

const BurgerRouter: React.FC<Properties> = (props) => {
  return (
    <BrowserRouter>
      <main>
        <NavBar mainTitle='The Burger Reviewer' loginTitle='Login' newUserTitle='New user' />
        <Routes>
          <Route
            path='/'
            element={
              <BurgerReview
                title={props.title}
                version={props.version}
                burgerReviewLogic={burgerLogic}
              />
            }
          />
          <Route path='/login' element={<BurgerLogin newUser={false} />} />
          <Route path='/register' element={<BurgerLogin newUser={true} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default BurgerRouter;
