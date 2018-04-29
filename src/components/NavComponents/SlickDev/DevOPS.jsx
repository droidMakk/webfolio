import React from "react";
import { Ansible, Jenkins, Vsts } from '../../../assets';
import SlickCard from './SlickCard';
import Slicker from './Slicker';

const DevOPS = () => {
    return <div style={{ marginTop: 10 }}>
        <Slicker>
            <SlickCard cardImg={Ansible} cardImgAlt="Ansible Icon" titleText="Ansible" />
            <SlickCard cardImg={Jenkins} cardImgAlt="Jenkins Icon" titleText="Jenkins" />
            <SlickCard cardImg={Vsts} cardImgAlt="Vsts Icon" titleText="VSTS" />
        </Slicker>
        </div>;
}

export default DevOPS;