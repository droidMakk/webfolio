import React from 'react';
import './navcomponents.css';
import Loader from 'react-loader';
import ImageLoader from 'react-load-image';
import bg_chennai from '../../assets/bg_chennai.jpg';


const WhoAmI = () => {
    return(
        <div className="displaydetailcard">
            <p className="displaydetailTitle"><span>🤔</span>Who Am I?</p>
            <hr/>
            <br/>
            <p className="courgette bottomMargin10">
            Hailing from <strong>மத்ராசபட்டினம் </strong> (Chennai) of Tamizh Nadu in
            India...
            </p>
            <div>
                <ChennaiBgLoader />
                <Chennai/>
            </div>
            <br/>
            <div className="courgette">
                Aspiring to become a professionally equipped, efficient
                &amp; community driven <br/>
                <br/>
                <span>😜</span>Creative Too... 
                <br/>
                <br/>
                <strong>
                    Full Stack Developer
                    <hr/>
                    <strong>MERN</strong> &amp; IoT
                </strong>
                <br/>
                <div className="devImage"><span>👨‍💻</span></div>
            </div>
        </div>
    )
}

const ChennaiBgLoader = () => {
    return(
        <ImageLoader src={bg_chennai}>
            <img  alt="Chennai BG" className="chennaiBG width100" />
            <div>Error Loading Image!</div>
            <Loader/>
        </ImageLoader>
    )
}

const Chennai = () => {
    return(
        <p className="chnBoard">
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>N</span>
            <span>N</span>
            <span>A</span>
            <span>i</span>
        </p>
    )
}

export { WhoAmI };