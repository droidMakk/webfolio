import React, { Component } from 'react';
import './Home.css'
import stopwatch from '../../assets/stopwatch.svg';

class Home extends Component{
    render(){
        return (
            <div className="holder">
                <p>
                    خوش آمدید
                </p>
                <hr/>
                    <img src={stopwatch} alt="Time" />
                    <p>
                        Soon To 
                        <br/>
                        <strong>BE</strong>
                        <br/>
                        Added !
                    </p>
            </div>
            
        )
    }
}

export { Home };
