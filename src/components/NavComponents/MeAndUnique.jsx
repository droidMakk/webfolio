import React from 'react';
import MeAndUniqueBg from '../../assets/meanduniquebg.jpg';

const MeAndUnique = () => {
    return(
        <div className="displaydetailcard">
            <p className="displaydetailTitle">Me And Unique...</p>
            <hr/>
            <p className="courgette bottomMargin10">Always remember that you are absolutely unique. Just like everyone else.</p>
            <img alt="Me and Unique bg" src={MeAndUniqueBg} className="meanduniquebg" />
            <div className="uniqueList">
                <div>Tech Savy</div>
                <div>Quick Graspoer of Modern Techs</div>
                <div>Learn, Evolve &amp; Grow</div>
                <div>Open Source Enthusiast</div>
                <div>BYOD</div>
            </div>
        </div>
    )
} 

export default MeAndUnique;