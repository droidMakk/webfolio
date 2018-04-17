import React,{ Component } from 'react';
import './component.css';
import NavCard from './common/NavCard';
import { Link } from 'react-router-dom';


const resdata = [
    {'mesg': 'Who Am I?','link':'/whoami' },
    {'mesg': 'Me and Unique','link':'/meandunique' },
    {'mesg': 'Alma mater','link':'/almamater' },
    {'mesg': 'As a Dev','link':'/asadev' },
    {'mesg': 'Project Experience','link':'/projectexperience' },
    {'mesg': 'Communities','link':'/communities' },
    {'mesg': 'Social','link':'/social' },
    {'mesg': 'Dev Stack','link':'/devstack'},
    {'mesg': 'Credits','link':'/credits'},
]

class Navigator extends Component{
    render(){
        return(
            <div className="navigatorHolder">
                <div className="navigator">
                    <nav className="navelement">
                        {resdata.map((data) => <NavElement key={data.mesg} data={data} />)}
                    </nav>
                </div>
            </div>
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
