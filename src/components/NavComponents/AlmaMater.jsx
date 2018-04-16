import React from 'react';
import './AlmaMater.css';
import studentIcon from '../../assets/student.svg';
import DataCamp from '../../assets/datacamp.svg';
import Loader from 'react-loader';
import EduBanner from '../../assets/education.jpg';
import ImageLoader from 'react-load-image';


const AlmaMater = () => {
    return(
        <div className="displaydetailcard">
            <h1 className="alignRight thinText displaydetailTitle">🏫 Alma Mater...</h1>
            <hr/>
            <p className="courgette">
                Develop a passion for learning. if you do, you will
                never cease to grow.
            </p>
            <p className="alignRight">Anthony J. D'Angelo</p>
            <br/>
            <AlmaBgLoader />
            <p className="courgette">
                    <br/>
                Graduation in Electrical and Electronics Engineering
                From <strong>KIT,</strong> Minjur.
                <br/>
                <br/>
                Schooled in <strong>Velankanni</strong>,Chennai
                <br/>
                <br/>
                SQL & R from DataCamp <img src={DataCamp} alt="Data Camp" className="dataCamp"/>
            </p>
            <div>
                <img src={studentIcon} className="almaMaterIcon" alt="Alma Mater"/>
            </div>
        </div>
    )
}

const AlmaBgLoader = () => {
    return(
        <ImageLoader src={EduBanner}>
            <img className="width100" alt="Edu Banner" />
            <div>Error Loading Image!</div>
            <Loader />
        </ImageLoader>
    );
}

export { AlmaMater };