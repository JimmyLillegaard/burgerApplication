import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BurgerLogic from './components/burgerLogic';
import BurgerAction from './burgerAction';
import BurgerComponent from './components/burgerComponent';

const burgerAction = new BurgerAction();
const burgerLogic = new BurgerLogic(burgerAction);

interface Properties {
  title: string;
  version: string;
}

const Routing: React.FC<Properties> = (props) => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Routing;
