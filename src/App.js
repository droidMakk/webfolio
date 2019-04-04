import React from 'react';
import { MainProfile, Navigator, Displaydetails } from './screens';

const App = () => {
    return (
      <React.Fragment>
          <MainProfile />
          <Navigator/>
          <Displaydetails/>
      </React.Fragment>
    );
}

export default App;
