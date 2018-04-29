import React,{ Component } from 'react';
import './slickCard.css';
import { nodejsIco, python, LuaIco, HTML_Logo, JSICon, Cssico } from '../../../assets'
import SlickCard from './SlickCard';
import Slicker from './Slicker';

class Technologies extends Component{
    render(){
        return <div>
            <Slicker>
              <SlickCard cardImg={nodejsIco} cardImgAlt="NodeJS Icon" titleText="Node JS" />
              <SlickCard cardImg={LuaIco} cardImgAlt="Lua Icon" titleText="E Lua" />
              <SlickCard cardImg={python} cardImgAlt="Python Icon" titleText="Python" />
              <SlickCard cardImg={HTML_Logo} cardImgAlt="HTML Icon" titleText="HTML 5" />
              <SlickCard cardImg={JSICon} cardImgAlt="JS Icon" titleText="JavaScript" />
              <SlickCard cardImg={Cssico} cardImgAlt="CSS Icon" titleText="CSS 3" />
            </Slicker>
          </div>;
    }
}

export default Technologies;