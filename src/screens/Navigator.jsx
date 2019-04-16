import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TopBar } from "../components";
import { NavCard, NavTogglr } from '../components/common';


const resdata = [
    {'mesg': '🏡 Home','link':'/home'},
    {'mesg': '🙋🏼‍♂️ Know me?','link':'/whoami' },
    {'mesg': '⌚ Timetravel','link':'/meandunique' },
    {'mesg': '💁🏼‍♂️ Contributions','link':'/almamater' },
    {'mesg': '💪🏼 Work / 👾 Train','link':'/work' },
    {'mesg': '✍🏼 Blogs','link':'/blogs' },
    {'mesg': '😄 Credits','link':'/credits'},
]

export const Navigator = () => {
  return <div className="navigatorHolder" id="navigatorHolder">
        <TopBar />
        <div className="navswitch" onClick={closeNavigator}>
          <NavTogglr />
        </div>
        <div className="navigator">
          <nav className="navelement">
            {resdata.map(data => (
              <NavElement
                key={data.mesg}
                data={data}
                onClick={closeNavigator}
              />
            ))}
          </nav>
        </div>
      </div>;
}

const closeNavigator = () => {
  if(window.innerWidth <= 450){
    document.getElementById("navigatorHolder").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("navigatorHolder").style.display = "none";
    }, 750);
  }
}


const NavElement = (props) => {
    const { mesg, link } = props.data;
    const { onClick } = props;
    return(
        <NavLink to={link} key={props.key} activeClassName="imActive">
            <NavCard key={mesg} onClick={onClick}>
                <div>{mesg}</div>
            </NavCard>
        </NavLink>
    );
}
