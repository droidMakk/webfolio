import React, { Component, Fragment } from 'react';
import MainProfile from './components/MainProfile';
import Navigator from './components/Navigator';
import { BrowserRouter } from 'react-router-dom';
import Displaydetails from './components/Displaydetails';
import './components/makeItResponsive.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainProfile />
          <Navigator/>
          <Displaydetails/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
