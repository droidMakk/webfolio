import React from 'react';
import './Card.css';

const Card = (props) => {
    const { children } = props;

    return(
        <div className="holderStyle">
            {children}
        </div>
    )
}



export default Card;