import React, { Component, Fragment } from 'react';
import MainProfile from './components/MainProfile';
import Navigator from './components/Navigator';
import Displaydetails from './components/Displaydetails';
import TopBar from './components/TopBar';
import './components/makeItResponsive.css';

class App extends Component {
  render() {
    return (
      <Fragment>
          <TopBar/>
          <MainProfile />
          <Navigator/>
          <Displaydetails/>
      </Fragment>
    );
  }
}

export default App;
