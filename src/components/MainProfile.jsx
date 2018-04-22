import React,{ Component } from 'react';
import TagDetails from './common/TagDetails';
import NavTogglr from './common/NavTogglr';
import './component.css';
import profie_image from '../assets/profile_image.jpg'; 
import dev_bg from '../assets/dev_bg.jpg';

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
              <img src={profie_image} className="imagebanner" alt="Profile Pic" />
            </div>
            <TagDetails />
          </div>;
    }
    
}



const inLinImageBg = {
    backgroundImage: "url(" + dev_bg + ")",
    paddingTop: '40px',
    backgroundPositionY: '-35px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
}

export default MainProfile;