import React from 'react';
import ImageLoader from 'react-load-image';
import MeAndUniqueBg from '../../assets/meanduniquebg.jpg';
import optmeanduniquebg from "../../assets/optimized/optmeanduniquebg.jpg";


const MeAndUnique = () => {
    return(
        <div className="displaydetailcard">
            <p className="displaydetailTitle"><span role="img" aria-label="unique" >🛸</span>Me And Unique...</p>
            <hr/>
            <p className="courgette bottomMargin10">
                Always remember that you are absolutely unique. Just like everyone else.
            </p>
            <p className="alignRight">-Margaret Mead</p>
            <MAUImageLoader />
            <div className="uniqueList">
                <div>Tech Savy</div>
                <div>Quick Grasper of Modern Techs</div>
                <div>Learn, Evolve &amp; Grow</div>
                <div>Open Source Enthusiast</div>
                <div>BYOD</div>
            </div>
        </div>
    )
} 

const OptMeandUniquebg = () => {
  return <img src={optmeanduniquebg} alt="Optimized Me and Unique BG" className="blurredImage meanduniquebg width100" />;
};


const MAUImageLoader = () => {
    return <ImageLoader src={MeAndUniqueBg}>
        <img className="meanduniquebg width100" alt="Me and Unique BG" />
        <div>Error Loading Image!</div>
        <OptMeandUniquebg />
      </ImageLoader>;
}

export { MeAndUnique };