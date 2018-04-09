import React from 'react';
import './Card.css';

const NavCard = (props) => {
    const { children } = props;

    return(
        <div className="navholderStyle block">
            {children}
        </div>
    )
}

export default NavCard;