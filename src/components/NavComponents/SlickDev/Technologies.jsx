import React,{ Component } from 'react';
import './slickCard.css';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [70, 80, 45, 65, 65],
          backgroundColor: ['#215732', '#F0DB4F', '#306998', '#e34c26','#006bb3'],
    }
],
labels: ["NodeJS", "JavaScript", "Python","HTML","CSS"]
};
class Technologies extends Component{
    render(){
        return <div>
            <Doughnut data={data} />
          </div>;
    }
}

export default Technologies;