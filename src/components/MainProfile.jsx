import React,{ Component } from 'react';
import TagDetails from './common/TagDetails';
import NavTogglr from './common/NavTogglr';
import './component.css';
import profie_image from '../assets/profile_image.jpg'; 
import dev_bg from '../assets/optimized/dev_bg.jpg';
import optprofile_image from '../assets/sqip/profile_image.svg';
import ImageLoader from "react-load-image";

class MainProfile extends Component {

    closeProfile(){
        document.getElementById("mainProfileStyle").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("mainProfileStyle").style.display = "none";
        }, 750);
    }
    
    render(){
        return <div className="mainProfileStyle" id="mainProfileStyle">
            <div className="navswitch" onClick={this.closeProfile}>
                <NavTogglr/>
            </div>
            <div className="imageHolder" style={inLinImageBg}>
              <ChennaiBgLoader/>
            </div>
            <TagDetails />
          </div>;
    }
    
}

const ChennaiBgLoader = () => {
  return <ImageLoader src={profie_image}>
      <img alt="Profile Pic" className="imagebanner" />
      <div>Error Loading Image!</div>
      <OptimalProfileImage />
      {/* <RingLoader/> */}
    </ImageLoader>;
};


const OptimalProfileImage = () => {
  return <img alt="Profile Pic" src={optprofile_image} className="imagebanner" />;
};

const inLinImageBg = {
    backgroundImage: "url(" + dev_bg + ")",
    paddingTop: '40px',
    backgroundPositionY: '-35px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
}

export default MainProfile;