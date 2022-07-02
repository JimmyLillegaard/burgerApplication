import React from 'react';
import ReactDOM from 'react-dom';
import BurgerReviewRouting from './burgerReviewRouter';

// Application to Render
const app = <BurgerReviewRouting title='Burger Reviewer' version='1.0.0' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));
