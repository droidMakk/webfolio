import React,{ Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './component.css';
import { Home, WhoAmI, MeAndUnique, AlmaMater, AsaDev, ChoiceOfTools } from './NavComponents';
import NavTogglr from "./common/NavTogglr";
import HamMenu from "../assets/ham-menu.svg";
import profileIcon from "../assets/profileIcon.svg";
import TopBar from './TopBar';

class Displaydetails extends Component {
  constructor() {
    super();
    this.toggleMainNav = this.toggleMainNav.bind(this);
    this.showNavigator = this.showNavigator.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    window.addEventListener("resize", () => {
      var el2 = document.getElementById("navigatorHolder");
      var el = document.getElementById("mainProfileStyle");
      if (window.outerWidth > 450) {
        el.style.display = "block";
        el.style.opacity = 1;
        el2.style.display = "block";
        el2.style.opacity = 1;
      } else {
        el2.style.display = "none";
        el2.style.opacity = 0;
      }
    });
  }

  state = { isNavOpen: false };

  focusHandler(ev){
      document.getElementById("mainTogglr").addEventListener('focusout',() => { if(this.state.isNavOpen){ this.toggleMainNav(); } });
    }

  toggleMainNav() {
    if (this.state.isNavOpen) {
      // Close Nav
      document.getElementById("subTogglrNav").style.right = "30px";
      document.getElementById("subTogglrNav").style.opacity = "0";

      document.getElementById("subTogglrProf").style.bottom = "40px";
      document.getElementById("subTogglrProf").style.opacity = "0";
      this.setState({ isNavOpen: false });
    } else {
      // Open Nav
      document.getElementById("subTogglrNav").style.right = "100px";
      document.getElementById("subTogglrNav").style.opacity = "1";

      document.getElementById("subTogglrProf").style.bottom = "110px";
      document.getElementById("subTogglrProf").style.opacity = "1";
      this.setState({ isNavOpen: true });
    }
  }

  showNavigator() {
    if(this.state.isNavOpen){ this.toggleMainNav(); }
    document.getElementById("navigatorHolder").style.display = "block";
    setTimeout(() => {
      document.getElementById("navigatorHolder").style.opacity = 1;
    }, 200);
  }

  showProfile() {
    if(this.state.isNavOpen){ this.toggleMainNav(); }
    document.getElementById("mainProfileStyle").style.display = "block";
    setTimeout(() => {
      document.getElementById("mainProfileStyle").style.opacity = 1;
    }, 200);
  }

  ViewTogglr() {
    return <NavTogglr />;
  }

  render() {
    return <div className="displayDetails">
        <TopBar />
        <div className="navswitch mainTogglr" id="mainTogglr" onClick={() => {
            this.toggleMainNav();
          }} onFocusCapture={this.focusHandler} tabIndex="1">
          {this.ViewTogglr()}
        </div>
        <div id="subTogglrProf" className="navswitch subTogglr" onClick={this.showProfile}>
          <img src={profileIcon} alt="my-profile" className="subTogglrIcon" />
        </div>
        <div id="subTogglrNav" className="navswitch subTogglr" onClick={this.showNavigator}>
          <img src={HamMenu} alt="ham-menu" className="subTogglrIcon" />
        </div>
        <div className="displayContainer">
          <Route render={({ location }) => <div>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <div>
                      <Switch location={location}>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/whoami" component={WhoAmI} />
                        <Route exact path="/meandunique" component={MeAndUnique} />
                        <Route exact path="/almamater" component={AlmaMater} />
                        <Route exact path="/asadev" component={AsaDev} />
                        <Route exact path="/choiceoftools" component={ChoiceOfTools} />
                      </Switch>
                </div>
              </div>} />
        </div>
      </div>;
  }
}

export default Displaydetails;