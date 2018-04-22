import React from 'react';
import './Card.css';

const NavCard = (props) => {
    const { children, onClick } = props;

    return <div className="navholderStyle block" onClick={onClick}>
        {children}
      </div>;
}

export default NavCard;