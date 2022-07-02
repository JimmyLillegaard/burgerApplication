import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing';

// Application to Render
const app = <Routing title='Burger Reviewer' version='1.0.0' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));
