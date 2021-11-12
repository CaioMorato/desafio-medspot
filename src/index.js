// vitals
import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './App';
// context
import GeneralProvider from './context/GeneralProvider';
// styles
import './index.css';
import './breakpoints.css';

ReactDOM.render(
  <GeneralProvider>
    <App />
  </GeneralProvider>,
  document.getElementById('root')
);
