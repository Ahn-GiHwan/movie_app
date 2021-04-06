import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './components/GlobalStyles';
import Router from './components/Router';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
