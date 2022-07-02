import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BurgerLogic from './components/burgerLogic';
import BurgerAction from './burgerAction';
import BurgerComponent from './components/burgerComponent';
import NavBar from '../shared/component/navBar/navBar';

const burgerAction = new BurgerAction();
const burgerLogic = new BurgerLogic(burgerAction);

interface Properties {
  title: string;
  version: string;
}

const Routing: React.FC<Properties> = (props) => {
  return (
    <BrowserRouter>
      <main>
        <NavBar mainTitle='The Burger Reviewer' loginTitle='Login' newUserTitle='New user' />
        <Routes>
          <Route
            path='/'
            element={
              <BurgerComponent
                title={props.title}
                version={props.version}
                burgerLogic={burgerLogic}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
