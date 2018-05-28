import React,{ Component } from 'react';
import './component.css';
import NavCard from './common/NavCard';
import NavTogglr from './common/NavTogglr';
import { NavLink } from 'react-router-dom';
import TopBar from "./TopBar";


const resdata = [
    {'mesg': 'Home','link':'/home'},
    {'mesg': 'Who Am I?','link':'/whoami' },
    {'mesg': 'Me and Unique','link':'/meandunique' },
    {'mesg': 'Alma mater','link':'/almamater' },
    {'mesg': 'As a Dev','link':'/asadev' },
    {'mesg': 'Choice of Tools','link':'/choiceoftools' },
    {'mesg': 'Being Social','link':'/social' },
    {'mesg': 'Credits','link':'/credits'},
]

class Navigator extends Component {
  closeNavigator() {
    if(window.innerWidth <= 450){
      document.getElementById("navigatorHolder").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("navigatorHolder").style.display = "none";
      }, 750);
    }
  }

  render() {
    return <div className="navigatorHolder" id="navigatorHolder">
        <TopBar />
        <div className="navswitch" onClick={this.closeNavigator}>
          <NavTogglr />
        </div>
        <div className="navigator">
          <nav className="navelement">
            {resdata.map(data => (
              <NavElement
                key={data.mesg}
                data={data}
                onClick={this.closeNavigator}
              />
            ))}
          </nav>
        </div>
      </div>;
  }
}
export default Navigator;


const NavElement = (props) => {
    const { mesg, link } = props.data;
    const { onClick } = props;
    return(
        <NavLink to={link} activeClassName="imActive">
            <NavCard key={mesg} onClick={onClick}>
                <div>{mesg}</div>
            </NavCard>
        </NavLink>
    );
}
