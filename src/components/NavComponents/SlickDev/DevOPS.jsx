import React from "react";
import { Ansible, Jenkins, Vsts } from '../../../assets';
import SlickCard from './SlickCard';
import Slicker from './Slicker';
import { Doughnut } from "react-chartjs-2";


const data = {
  datasets: [
    {
      data: [80, 70, 75, 65, 50],
      backgroundColor: [
        "#62c1c0",
        "#cb3530",
        "#0074d0",
        "#044860",
        "#0096c0"
      ]
    }
  ],
  labels: ["Ansible", "Jenkins", "VSTS", "CircleCI", "Dockers"]
};

const DevOPS = () => {
    return <div style={{ marginTop: 10 }}>
            <Doughnut data={data} />
        </div>;
}

const SlickerDevOps = () => {
    return <Slicker>
        <SlickCard cardImg={Ansible} cardImgAlt="Ansible Icon" titleText="Ansible" />
        <SlickCard cardImg={Jenkins} cardImgAlt="Jenkins Icon" titleText="Jenkins" />
        <SlickCard cardImg={Vsts} cardImgAlt="Vsts Icon" titleText="VSTS" />
      </Slicker>;
}

export default DevOPS;