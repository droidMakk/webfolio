import React, { Component, Fragment } from 'react';
import MainProfile from './components/MainProfile';
import Navigator from './components/Navigator';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <MainProfile />
          <Navigator/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
