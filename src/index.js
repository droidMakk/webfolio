import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import importedComponent from 'react-imported-component';
import './index.css';
import { Loading } from './components/common';

const App = importedComponent( () => import('./App'), {
    LoadingComponent: Loading
});


ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

