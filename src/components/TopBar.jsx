import React from 'react';
import Banner from "../assets/banner.jpeg";

export const TopBar = () => {
    return(
        <div className="topBar">
            <h1><span><img className="banner-logo" src={Banner} alt="banner-logo"/></span> Droidmakk</h1>
        </div>
    )
}