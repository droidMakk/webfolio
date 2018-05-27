import React,{ Component } from 'react';
import { VSCode, Sublime, Jupyter, PostMan, CodeCept, Docker, Trello, PM2, Sinon, Azure, Aws, Git, Firebase } from '../../assets/';
import SlickCard from "./SlickDev/SlickCard";
import Slicker from "./SlickDev/Slicker";
import AnimationComponent from '../common/AnimationComponent';
import { HorizontalBar } from "react-chartjs-2";
import Card from "../common/Card";

const editordata = {
  datasets: [
    {
      data: [89, 75, 81],
      backgroundColor: [
        "#61dafb",
        "#123f21",
        "#5f6972"
      ],
      label: "Editors"
    },
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
              <h1 className="thinText" >Editors</h1>
                <HorizontalBar data={editordata} />
            </div>
            <div>
              <br />
              <h1 className="thinText" >Tools</h1>
              <Slicker>
                <SlickCard cardImg={PostMan} cardImgalt="Postman" titleText="Postman" />
                <SlickCard cardImg={CodeCept} cardImgalt="CodeCept" titleText="CodeCept JS" />
                <SlickCard cardImg={Sinon} cardImgalt="Sinon" titleText="Sinon JS" />
              </Slicker>
            </div>
            <div>
              <br />
              <h1 className="thinText" >More Tools</h1>
              <Slicker>
                <SlickCard cardImg={PM2} cardImgalt="PM2" titleText="PM2 JS" />
                <SlickCard cardImg={Docker} cardImgalt="Docker" titleText="Docker" />
                <SlickCard cardImg={Trello} cardImgalt="Trello" titleText="Trello" />
              </Slicker>
            </div>
            <div>
              <br />
              <h1 className="thinText" >Cloud</h1>
              <Slicker>
                <SlickCard cardImg={Azure} cardImgalt="Azure" titleText="Azure" />
                <SlickCard cardImg={Aws} cardImgalt="Aws" titleText="AWS" />
                <SlickCard cardImg={Git} cardImgalt="Git" titleText="Pages" />
                <SlickCard cardImg={Firebase} cardImgalt="Firebase" titleText="Firebase" />
              </Slicker>
            </div>
              <br />
          </div>
          </AnimationComponent>;
    }
}

const TextEditor = () => {
  return(
    <Slicker>
      <SlickCard cardImg={VSCode} cardImgalt="VS Code" titleText="VS Code" />
      <SlickCard cardImg={Sublime} cardImgalt="Sublime" titleText="Sublime" />
      <SlickCard cardImg={Jupyter} cardImgalt="Jupyter" titleText="Jupyter" />
    </Slicker>
  )
}

export { ChoiceOfTools };