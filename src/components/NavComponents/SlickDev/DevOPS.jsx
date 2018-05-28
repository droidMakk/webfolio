import React from "react";
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

export default DevOPS;