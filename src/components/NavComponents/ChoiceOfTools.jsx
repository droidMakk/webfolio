import React,{ Component } from 'react';
import AnimationComponent from '../common/AnimationComponent';
import { Doughnut } from "react-chartjs-2";

const editordata = {
  datasets: [
    {
      data: [89, 75, 65],
      backgroundColor: ["#0076c6", "#f79202", "#69c085"],
      label: "Editors"
    }
  ],
  labels: ["Code", "Sublime", "Atom"]
};


class ChoiceOfTools extends Component{

    render(){
        return <AnimationComponent><div className="displaydetailcard">
            <p className="displaydetailTitle">
              <span role="img" aria-label="tools">
                ⚒
              </span> Choice of Tools
            </p>
            <hr/>
            <div>
              <br/>
              <h2 className="thinText" >Editors</h2>
                <Doughnut data={editordata} />
            </div>
            <div>
              <br />
              <h2 className="thinText" >Tools</h2>
              <ul className="tools-list">
                <li>Postman</li>
                <li>CodeceptJS</li>
                <li>Sinon</li>
                <li>Trello</li>
                <li>PM2</li>
              </ul>
            </div>
            <div>
              <br />
              <h2 className="thinText" >Cloud</h2>
              <ul className="tools-list">
                <li>Azure</li>
                <li>Aws</li>
                <li>Firebase</li>
                <li>Github Pages</li>
              </ul>
            </div>
              <br />
          </div>
          </AnimationComponent>;
    }
}

export { ChoiceOfTools };