import React, {Component} from 'react';
import './Home.css';
import AnimationComponent from '../common/AnimationComponent';

class Home extends Component {
  render () {
    return (
      <AnimationComponent>
        <div className="displaydetailcard" >
            <p className="displaydetailTitle" >
                <span role="img" aria-label="home" >
                    🏡
                </span> Home
            </p>
            <hr/>
            <div>
                
            </div>
        </div>
      </AnimationComponent>
    );
  }
}

export {Home};
