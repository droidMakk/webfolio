import React,{ Component } from 'react';
import Slider from 'react-slick';
import './slickCard.css';
import nodejsIco from '../../../assets/nodejsOne.png';
import python from '../../../assets/python.png';
import LuaIco from '../../../assets/lua.png';
import HTML_Logo from '../../../assets/HTML_Logo.png';
import JSICon from '../../../assets/JSICon.png';
import Trianglify from '../../../assets/trianglify.svg';
import SlickCard from './SlickCard';

class Technologies extends Component{
    render(){
        var settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            centreMode: true,
            arrows: true
        };

        return(
            <div style={{ backgroundImage: "url(" + Trianglify + ")" }}>
                <Slider {...settings} >
                    <SlickCard cardImg={nodejsIco} cardImgAlt="NodeJS Icon" titleText="Node JS"/>
                    <SlickCard cardImg={LuaIco} cardImgAlt="Lua Icon" titleText="E Lua"/>
                    <SlickCard cardImg={python} cardImgAlt="Python Icon" titleText="Python"/>
                    <SlickCard cardImg={HTML_Logo} cardImgAlt="HTML Icon" titleText="HTML 5"/>
                    <SlickCard cardImg={JSICon} cardImgAlt="JS Icon" titleText="JavaScript"/>
                </Slider>
            </div>
        )
    }
}

export default Technologies;