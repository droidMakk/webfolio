import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './component.css';
import { Home, WhoAmI, MeAndUnique, AlmaMater, AsaDev } from './NavComponents';
import NavTogglr from "./common/NavTogglr";
import HamMenu from "../assets/ham-menu.svg";
import profileIcon from "../assets/profileIcon.svg";

class Displaydetails extends Component {

    constructor(){
        super();
        this.toggleMainNav = this.toggleMainNav.bind(this);
        this.showNavigator = this.showNavigator.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }
    
    state = { isNavOpen: false };
    
    toggleMainNav(){
        if(this.state.isNavOpen){
            // Close Nav
            document.getElementById("subTogglrNav").style.right = "30px";
            document.getElementById("subTogglrNav").style.opacity = "0";

            document.getElementById("subTogglrProf").style.bottom = "40px";
            document.getElementById("subTogglrProf").style.opacity = "0";
            this.setState({isNavOpen: false});
        }else{
            // Open Nav
            document.getElementById("subTogglrNav").style.right = "100px";
            document.getElementById("subTogglrNav").style.opacity = "1";

            document.getElementById("subTogglrProf").style.bottom = "110px";
            document.getElementById("subTogglrProf").style.opacity = "1";
            this.setState({isNavOpen: true});
        }
    }

    showNavigator(){
        this.toggleMainNav();
        document.getElementById("navigatorHolder").style.display = "block";
        setTimeout(() => {
          document.getElementById("navigatorHolder").style.opacity = 1;
        }, 200);
    }

    showProfile(){
        this.toggleMainNav();
        document.getElementById("mainProfileStyle").style.display = "block";
        setTimeout(() => {
          document.getElementById("mainProfileStyle").style.opacity = 1;
        }, 200);
    }
    
    ViewTogglr(){
        if(this.state.isNavOpen){
            return <NavTogglr />;
        }else{
            return <div>o</div>
        }
    }

    render() {
      return <div className="displayDetails">
          <div className="navswitch mainTogglr" onClick={() => {
              this.toggleMainNav();
            }}>
            {this.ViewTogglr()}
          </div>
          <div id="subTogglrProf" className="navswitch subTogglr" onClick={this.showProfile} >
            <img src={profileIcon} alt="my-profile" className="subTogglrIcon"/>          
          </div>
          <div id="subTogglrNav" className="navswitch subTogglr" onClick={this.showNavigator} >
            <img src={HamMenu} alt="ham-menu" className="subTogglrIcon"/>          
          </div>
          <div className="displayContainer">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/whoami" component={WhoAmI} />
              <Route exact path="/meandunique" component={MeAndUnique} />
              <Route exact path="/almamater" component={AlmaMater} />
              <Route exact path="/asadev" component={AsaDev} />
            </Switch>
          </div>
        </div>;
    }
}

export default Displaydetails;