import React, { Component } from 'react';

class SocialCard extends Component{
    componentDidMount(){
        if (window.innerWidth > 450 ){
            document.querySelectorAll("#social-card").forEach(e => {
                e.onmouseover = () => {
                    e.querySelector(".social-title").style.opacity = "1";
                };
                e.onmouseleave = () => {
                    e.querySelector('.social-title').style.opacity = '0';
                };
            });
        }
    }

    render(){
        const { social, icon, link } = this.props;
        
        return (
            <div className="social-card" id="social-card">
                <a href={link} className="social-link">
                    <img src={icon} className="social-card-img" />
                    <h5 className="social-title">{social}</h5>
                </a>
            </div>
        )
    }
}


export default SocialCard;