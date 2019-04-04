import React from 'react';


export const SocialCard = ({ icon, link }) => {
        
    return (
        <div className="social-card" id="social-card">
            <a href={link} className="social-link">
                <img src={icon} className="social-card-img" alt="Social Title" />
            </a>
        </div>
    )
}