import React from 'react';
import './AsaDev.css';
import nodejs from '../../assets/nodejs.png';

const AsaDev = () => {
    return(
        <div className="displaydetailcard">
            <p className="displaydetailTitle">👨‍💻 As A Dev...</p>
            <hr/>
            <div className="asadevdetails">
                <h1 className="courgette">Programming Languages</h1>
                <br/>
                <p className="thinText">
                    <span><img className="devlangicon" src={nodejs} /></span>Node JS
                    <br/>
                    <span><img className="devlangicon" src={nodejs} /></span>Node JS
                </p>
            </div>
        </div>
    )
}

export { AsaDev };