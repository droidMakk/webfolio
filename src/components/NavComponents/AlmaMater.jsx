import React from 'react';
import './AlmaMater.css';
import studentIcon from '../../assets/student.svg';
import DataCamp from '../../assets/datacamp.svg';
import EduBanner from '../../assets/education.jpg';
import OptEduBanner from "../../assets/optimized/OptEducation.jpg";
import Udemy from '../../assets/udemy.png';
import ImageLoader from 'react-load-image';


const AlmaMater = () => {
    return <div className="displaydetailcard">
        <h1 className="alignRight thinText displaydetailTitle">
          <span role="img" aria-label="school">
            🏫
          </span> Alma Mater...
        </h1>
        <hr />
        <p className="courgette">
          Develop a passion for learning. if you do, you will never cease to
          grow.
        </p>
        <p className="alignRight">Anthony J. D'Angelo</p>
        <br />
        <AlmaBgLoader />
        <p className="courgette">
          <br />
          Graduated in Electrical and Electronics Engineering From <strong>
            KIT,
          </strong> Minjur.
          <br />
          <br />
          Schooled in <strong>Velankanni</strong>,Chennai
          <br />
          <br />
          <img src={DataCamp} alt="Data Camp" className="eduicon" /> &nbsp; SQL & R from DataCamp
          <br />
          <br />
          <img src={Udemy} alt="Udemy" className="eduicon" /> &nbsp; React-Native Certification from Udemy
          <br />
          <br />
        </p>
        <div>
          <img src={studentIcon} className="almaMaterIcon" alt="Alma Mater" />
        </div>
      </div>;
}

const OptEducation = () => {
  return <img src={OptEduBanner} className="blurredImage width100" alt="Edu Banner Optimized" />;
};

const AlmaBgLoader = () => {
    return <ImageLoader src={EduBanner}>
        <img className="width100" alt="Edu Banner" />
        <div>Error Loading Image!</div>
        <OptEducation />
      </ImageLoader>;
}

export { AlmaMater };