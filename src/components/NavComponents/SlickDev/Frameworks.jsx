import React from 'react';
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

export default Frameworks;