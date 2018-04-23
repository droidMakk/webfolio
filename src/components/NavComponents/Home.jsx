import React, { Component } from 'react';
import './Home.css'
import stopwatch from '../../assets/stopwatch.svg';

class Home extends Component{
    render(){
        return <div className="holder">
            <p>خوش آمدید</p>
            <img src={stopwatch} alt="Time" />
            <hr />
            <p>Beta Release</p>
            <p>
              <span> 🛠 </span>
            </p>
          </div>;
    }
}

export { Home };
