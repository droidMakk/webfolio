import React from 'react';
import './component.css';

const Displaydetails = (props) => {
    return(
        <div className="displayDetails">
            {props.children}
        </div>
    );
}

export default Displaydetails;