import React,{ Component } from 'react';
import { PostMan, CodeCept, Docker, Trello, PM2, Sinon, Azure, Aws, Git, Firebase } from '../../assets/';
import SlickCard from "./SlickDev/SlickCard";
import Slicker from "./SlickDev/Slicker";
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

const Tools = () => {
  return(
    <Slicker>
      <SlickCard cardImg={PostMan} cardImgalt="Postman" titleText="Postman" />
      <SlickCard cardImg={CodeCept} cardImgalt="CodeCept" titleText="CodeCept JS" />
      <SlickCard cardImg={Sinon} cardImgalt="Sinon" titleText="Sinon JS" />
      <SlickCard cardImg={PM2} cardImgalt="PM2" titleText="PM2 JS" />
      <SlickCard cardImg={Docker} cardImgalt="Docker" titleText="Docker" />
      <SlickCard cardImg={Trello} cardImgalt="Trello" titleText="Trello" />
    </Slicker>
  )
}

const Hosting = () => {
  return(
    <Slicker>
      <SlickCard cardImg={Azure} cardImgalt="Azure" titleText="Azure" />
      <SlickCard cardImg={Aws} cardImgalt="Aws" titleText="AWS" />
      <SlickCard cardImg={Git} cardImgalt="Git" titleText="Pages" />
      <SlickCard cardImg={Firebase} cardImgalt="Firebase" titleText="Firebase" />
    </Slicker>
  )
}

export { ChoiceOfTools };