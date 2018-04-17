import React from 'react';
import './AsaDev.css';
import nodejs from '../../assets/nodejs.png';

const AsaDev = () => {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">
          <span role="img" aria-label="devmode">
            👨‍💻
          </span> As A Dev...
        </p>
        <hr />
        <div className="asadevdetails">
          <h1 className="courgette">Programming Languages</h1>
          <br />
          <p className="thinText">
            <span>
              <img className="devlangicon" src={nodejs} alt="nodeone" />
            </span>Node JS
            <br />
            <span>
              <img className="devlangicon" src={nodejs} alt="nodetwo" />
            </span>Node JS
          </p>
        </div>
      </div>;
}

export { AsaDev };