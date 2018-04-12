import React from 'react';
import './component.css';
import profie_image from '../assets/profile_image.jpg';
import TagDetails from './common/TagDetails';
import dev_bg from '../assets/dev_bg.jpg';

const MainProfile = () => {
    return(
        <div className="mainProfileStyle">
            <div className="imageHolder" style={ inLinImageBg }>
                <img src={profie_image}  className="imagebanner" alt="Profile Pic"/>
            </div>
            <TagDetails />
        </div>
    )
}

const inLinImageBg = {
    backgroundImage: "url(" + dev_bg + ")",
    paddingTop: '40px',
    backgroundPositionY: '-35px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
}

export default MainProfile;