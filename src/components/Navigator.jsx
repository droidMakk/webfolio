import React,{ Component, Fragment } from 'react';
import './component.css';
import NavCard from './common/NavCard';
import Displaydetails from './Displaydetails';
import { Route, Link } from 'react-router-dom';
import Home from './NavComponents/Home';
import WhoAmI from './NavComponents/WhoAmI';
import MeAndUnique from './NavComponents/MeAndUnique';

const resdata = [
    {'mesg': 'Who Am I?','link':'/whoami' },
    {'mesg': 'Me and Unique','link':'/meandunique' },
    {'mesg': 'Alma mater','link':'/almamater' },
    {'mesg': 'As a Dev','link':'/asadev' },
    {'mesg': 'Project Experience','link':'/projectexperience' },
    {'mesg': 'Communities','link':'/communities' },
    {'mesg': 'Social','link':'/social' },
    {'mesg': 'Dev Stack','link':'/devstack'}
]

class Navigator extends Component{
    render(){
        return(
            <Fragment>
            <div className="navigatorHolder">
                <div className="navigator">
                    <nav className="navelement">
                        {resdata.map((data) => <NavElement key={data.mesg} data={data} />)}
                    </nav>
                </div>
            </div>
            <Displaydetails>
                <Route exact path='/' component={Home} />
                <Route path='/whoami' component={WhoAmI} />
                <Route path='/meandunique' component={MeAndUnique} />
            </Displaydetails>            
            </Fragment>
        )
    }
}
export default Navigator;


const NavElement = (props) => {
    const { mesg, link } = props.data;
    return(
        <Link to={link}>
            <NavCard key={mesg}>
                <div>{mesg}</div>
            </NavCard>
        </Link>
    );
}
