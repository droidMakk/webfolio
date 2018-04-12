import React from 'react';
import './WhoAmI.css';
import bg_chennai from '../../assets/bg_chennai.jpg';

const WhoAmI = () => {
    return(
        <div className="displaydetailcard">
            <p className="displaydetailTitle">Who Am I?</p>
            <hr/>
            <br/>
            <p className="courgette bottomMargin10">
            Hailing from <strong>மத்ராசபட்டினம் </strong> (Chennai) of Tamizh Nadu in
            India...
            </p>
            <div>
                <img src={bg_chennai} alt="Chennai BG" className="chennaiBG" />
                <Chennai/>
            </div>
            <br/>
            <div className="courgette">
                Aspiring to become a professionally equipped, efficient
                &amp; community driven <br/>
                <br/>
                😜 Creative Too... 
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

export default WhoAmI;