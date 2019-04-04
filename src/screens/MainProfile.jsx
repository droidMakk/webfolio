import React from 'react';
import { TagDetails } from '../components';
import { NavTogglr } from '../components/common';
import profie_image from '../assets/profile_image.jpg'; 
import dev_bg from '../assets/optimized/dev_bg.jpg';

export const MainProfile = () => {
    
        return <div className="mainProfileStyle" id="mainProfileStyle">
            <div className="navswitch" onClick={closeProfile}>
                <NavTogglr/>
            </div>
            <div className="imageHolder" style={inLinImageBg}>
              <ProfileImage/>
            </div>
            <TagDetails />
          </div>;
    
} 

const closeProfile = () => {
    document.getElementById("mainProfileStyle").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("mainProfileStyle").style.display = "none";
    }, 750);
}

const ProfileImage = () => {
    return (
        <img src={profie_image} alt="Profile Pic" className="imagebanner"/>
    )
}


const inLinImageBg = {
    backgroundImage: "url(" + dev_bg + ")",
    paddingTop: '40px',
    backgroundPositionY: '-35px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
}