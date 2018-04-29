import React,{ Component } from 'react';
import Slider from 'react-slick';

class Slicker extends Component{

    constructor(){
        super();
        this.state = { showSlides: 1 };
        if(window.innerWidth >= 450){ this.setState({ showSlides: 2 }) }
    }

    render(){
        var { children } = this.props;

        var settings = {
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true
    };

    return <div style={{ marginTop: 10 }}>
        <Slider {...settings}>
            {children}
        </Slider>
        </div>;
    }
}

export default Slicker;