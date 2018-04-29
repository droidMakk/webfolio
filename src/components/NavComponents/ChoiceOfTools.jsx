import React,{ Component } from 'react';
import { VSCode, Sublime, Jupyter, PostMan, CodeCept, Docker, Trello, PM2, Sinon, Azure, Aws, Git, Firebase } from '../../assets/';
import SlickCard from "./SlickDev/SlickCard";
import Slicker from "./SlickDev/Slicker";


class ChoiceOfTools extends Component{
    render(){
        return <div className="displaydetailcard">
            <p className="displaydetailTitle">
              <span role="img" aria-label="tools">
                ⚒
              </span> Choice of Tools
              <hr/>
            </p>
            <div>
            <br/>
            <h1 className="thinText" >Editors</h1>
              <Slicker>
                <SlickCard cardImg={VSCode} cardImgalt="VS Code" titleText="VS Code" />
                <SlickCard cardImg={Sublime} cardImgalt="Sublime" titleText="Sublime" />
                <SlickCard cardImg={Jupyter} cardImgalt="Jupyter" titleText="Jupyter" />
              </Slicker>
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
          </div>;
    }
}

export { ChoiceOfTools };