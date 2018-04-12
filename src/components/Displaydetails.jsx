import React from 'react';
import './component.css';

const Displaydetails = (props) => {
    return(
        <div className="displayDetails">
            <div className="displayContainer">
                {props.children}
            </div>
        </div>
    );
}

export default Displaydetails;