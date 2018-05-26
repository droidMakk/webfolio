import React from 'react';
import Slider from 'react-slick';


const Slicker = ({ children }) => {

        var settings = {
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true
        };

    return (
        <div style={{ marginTop: 10 }}>
        <Slider {...settings}>
            {children}
        </Slider>
        </div>
        );
}

export default Slicker;