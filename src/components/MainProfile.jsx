import React from 'react';
import './component.css';
import profie_image from '../assets/profile_image.jpg';
import TagDetails from './common/TagDetails';

const MainProfile = () => {
    return(
        <div className="mainProfileStyle">
            <div className="imageHolder">
                <img src={profie_image}  className="imagebanner" alt="Profile Pic"/>
            </div>
            <TagDetails />
        </div>
    )
}

export default MainProfile;