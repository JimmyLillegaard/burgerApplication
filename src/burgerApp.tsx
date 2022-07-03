import React from 'react';
import ReactDOM from 'react-dom';
import BurgerRouter from './burgerRouter';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../shared/style/burgerApp.less';

// Application to Render
const app = <BurgerRouter title='Burger Reviewer' version='1.0.0' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));
