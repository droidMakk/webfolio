import React from 'react';
import './AsaDev.css';
import Technologies from './SlickDev/Technologies';

const AsaDev = () => {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">
          <span role="img" aria-label="devmode">
            👨‍💻
          </span> As A Dev...
        </p>
        <hr />
        <div className="asadevdetails">
          <h1 className="courgette">Programming Stack Exposed To..</h1>
          <br />
          <div>
            <Technologies />
          </div>
        </div>
      </div>;
}

export { AsaDev };