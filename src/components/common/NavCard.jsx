import React from 'react';
import './Card.css';

export const NavCard = (props) => {
    const { children, onClick } = props;

    return <div className="navholderStyle block" onClick={onClick}>
        {children}
      </div>;
}