import React from 'react';
import AnimationComponent from '../components/common/AnimationComponent';



export class Home extends React.Component {
  render () {
    return (
      <AnimationComponent>
        <div className="displaydetailcard" >
            <p className="displaydetailTitle" >
                <span role="img" aria-label="" >
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
