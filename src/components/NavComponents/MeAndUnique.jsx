import React from 'react';
import MeAndUniqueBg from "../../assets/optimized/optmeanduniquebg.jpg";
import AnimatonComponent from '../common/AnimationComponent';


const MeAndUnique = () => {
    return(
        <AnimatonComponent>
            <div className="displaydetailcard">
                <p className="displaydetailTitle"><span role="img" aria-label="unique" >🛸</span>Me And Unique...</p>
                <hr/>
                <p className="courgette bottomMargin10">
                    Always remember that you are absolutely unique. Just like everyone else.
                </p>
                <p className="alignRight">-Margaret Mead</p>
                <img src={MeAndUniqueBg} className="width100 meanduniquebg" alt="Me and Unique BG"/>
                <div className="uniqueList">
                    <div> Tech Savy</div>
                    <div> Quick Grasper of Modern Techs</div>
                    <div> Learn, Evolve &amp; Grow</div>
                    <div> Open Source Enthusiast</div>
                    <div> BYOD</div>
                </div>
            </div>
        </AnimatonComponent>
    )
} 

export { MeAndUnique };