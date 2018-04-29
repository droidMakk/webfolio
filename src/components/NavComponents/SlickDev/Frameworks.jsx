import React from 'react';
import SlickCard from './SlickCard';
import { ReactIcon, Express, Pug, SocketIO, Jquery } from "../../../assets";
import Slicker from './Slicker';

const Frameworks = () => {
    return <div style={{ marginTop: 10 }}>
        <Slicker>
            <SlickCard cardImg={ReactIcon} cardImgAlt="React Icon" titleText="React JS" />
            <SlickCard cardImg={ReactIcon} cardImgAlt="React Native Icon" titleText="Native" />
            <SlickCard cardImg={Express} cardImgAlt="Express JS Icon" titleText="Express JS" />
            <SlickCard cardImg={Pug} cardImgAlt="Pug JS Icon" titleText="Pug JS" />
            <SlickCard cardImg={SocketIO} cardImgAlt="Socket IO Icon" titleText="Socket IO" />
            <SlickCard cardImg={Jquery} cardImgAlt="Jquery Icon" titleText="Jquery" />
        </Slicker>
        </div>;
}

export default Frameworks;