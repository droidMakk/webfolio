import React,{ Component } from 'react';
import './navcomponents.css';
import bg_chennai from '../../assets/bg_chennai.jpg';
import AnimationComponent from '../common/AnimationComponent';


class WhoAmI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };

    this.closeComponent = ev => {
      ev.preventDefault();
      this.setState({ isVisible: false });

      setTimeout(() => {
        this.props.history.push("/");
      }, 300);
    };
  }

  render() {
    return (
      <AnimationComponent>
        <div className="displaydetailcard">
          <p className="displaydetailTitle">
            <span role="img" aria-label="thinking">
              🤔
            </span>Who Am I?
          </p>
          <hr />
          <br />
          <p className="courgette bottomMargin10">
            Hailing from <strong>மத்ராசபட்டினம் </strong> (Chennai) of Tamizh
            Nadu in India...
          </p>
          <div>
            <ChennaiBg />
            <Chennai />
          </div>
          <br />
            <WhoIBecome/>
        </div>
      </AnimationComponent>
    );
  }
}


const ChennaiBg = () => {
  return <img className="chennaiBG width100"  src={bg_chennai} alt="Chennai Bg"/>
}

const Chennai = () => {
    return(
        <p className="chnBoard">
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>N</span>
            <span>N</span>
            <span>A</span>
            <span>i</span>
        </p>
    )
}

const WhoIBecome = () => {
  return (
    <div className="courgette">
      Aspiring to become a professionally equipped, efficient &amp;
            community driven <br />
      <br />
      <span role="img" aria-label="creative">
        😜
            </span>Creative Too...
            <br />
      <br />
      <strong>
        Full Stack Developer
              <hr />
        <strong>MERN</strong> &amp; IoT
            </strong>
      <br />
      <div className="devImage">
        <span role="img" aria-label="geek">
          👨‍💻
        </span>
      </div>
    </div>
  );
}

export { WhoAmI };