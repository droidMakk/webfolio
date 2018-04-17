import React,{ Component } from 'react';
import './component.css';
import { Home, WhoAmI, MeAndUnique, AlmaMater, AsaDev } from './NavComponents';
import { Route } from 'react-router-dom';

class Displaydetails extends Component {
    
    clickedMe(){
        console.log('cliced');
    }
    
    render() {
      return(
            <div className="displayDetails">
                <div className="showNavAndProfile" onClick={() => { this.clickedMe() }}></div>
                <div className="displayContainer">
                    <Route exact path='/' component={Home} />
                    <Route path='/whoami' component={WhoAmI} />
                    <Route path='/meandunique' component={MeAndUnique} />
                    <Route path='/almamater' component={AlmaMater} />
                    <Route path='/asadev' component={AsaDev} />
                </div>
            </div>
        );
    };
}

export default Displaydetails;