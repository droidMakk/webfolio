import React from 'react';
import SlickCard from './SlickCard';
import { ReactIcon, Express, Pug, SocketIO, Jquery } from "../../../assets";
import Slicker from './Slicker';
import { Doughnut } from 'react-chartjs-2';


const data = {
  datasets: [
    {
      data: [80, 70, 75, 65, 50, 70],
      backgroundColor: [
        "#61dafb",
        "#000",
        "#5f6972",
        "#e8c69e",
        "#000000",
        "#0865a6"
      ]
    }
  ],
  labels: ["React", "React Native", "Express", "Pug", "Socket IO", "Jquery"]
};

const Frameworks = () => {
    return <div style={{ marginTop: 10 }}>
            <Doughnut data={data} />
        </div>;
}

const SlickerFramework = () => {
    return <Slicker>
        <SlickCard cardImg={ReactIcon} cardImgAlt="React Icon" titleText="React JS" />
        <SlickCard cardImg={ReactIcon} cardImgAlt="React Native Icon" titleText="Native" />
        <SlickCard cardImg={Express} cardImgAlt="Express JS Icon" titleText="Express JS" />
        <SlickCard cardImg={Pug} cardImgAlt="Pug JS Icon" titleText="Pug JS" />
        <SlickCard cardImg={SocketIO} cardImgAlt="Socket IO Icon" titleText="Socket IO" />
        <SlickCard cardImg={Jquery} cardImgAlt="Jquery Icon" titleText="Jquery" />
      </Slicker>;
}

export default Frameworks;