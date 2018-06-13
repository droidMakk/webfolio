import React from 'react';


const SocialCard = () => {
    const { icon, link } = this.props;
        
    return (
        <div className="social-card" id="social-card">
            <a href={link} className="social-link">
                <img src={icon} className="social-card-img" alt="Social Title" />
            </a>
        </div>
    )
}

export default SocialCard;