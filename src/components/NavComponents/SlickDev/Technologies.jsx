import React,{ Component } from 'react';
import './slickCard.css';
import { nodejsIco, python, LuaIco, HTML_Logo, JSICon, Cssico } from '../../../assets'
import SlickCard from './SlickCard';
import Slicker from './Slicker';
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

const SlickerTech = () => {
    return (
        <Slicker>
            <SlickCard cardImg={nodejsIco} cardImgAlt="NodeJS Icon" titleText="Node JS" />
            <SlickCard cardImg={LuaIco} cardImgAlt="Lua Icon" titleText="E Lua" />
            <SlickCard cardImg={python} cardImgAlt="Python Icon" titleText="Python" />
            <SlickCard cardImg={HTML_Logo} cardImgAlt="HTML Icon" titleText="HTML 5" />
            <SlickCard cardImg={JSICon} cardImgAlt="JS Icon" titleText="JavaScript" />
            <SlickCard cardImg={Cssico} cardImgAlt="CSS Icon" titleText="CSS 3" />
        </Slicker>
    )
}

export default Technologies;