import React from 'react';
import './AsaDev.css';
import Technologies from './SlickDev/Technologies';
import DevOPS from './SlickDev/DevOPS';
import Frameworks from './SlickDev/Frameworks';

const AsaDev = () => {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">
          <span role="img" aria-label="devmode">
            👨‍💻
          </span> As A Dev...
        </p>
        <hr />
        <div className="asadevdetails">
          <br />
          <h1 className="courgette">Programming Stack Exposed To..</h1>
            <Technologies />
          <br />
          <br />
          <h1 className="courgette">Frameworks like to Tinker..</h1>
            <Frameworks />
          <br />
          <br />
          <h1 className="courgette">When CI/CD automates things..</h1>
            <DevOPS />
            <br/>
        </div>
      </div>;
}

export { AsaDev };