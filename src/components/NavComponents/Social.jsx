import React, { Component, Fragment } from 'react';
import TweetEmbed from "react-tweet-embed";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import SocialCard from "../common/SocialCard";

import DevBadge from "../../assets/socialicons/dev-badge.svg";
import LinkedIn from "../../assets/socialicons/linkedin.png";
import Octocat from "../../assets/socialicons/Octocat.jpg";
import WhatsApp from "../../assets/socialicons/whatsapp.svg";
import Fb from "../../assets/socialicons/facebook.svg";
import Twitter from "../../assets/socialicons/twitter.svg";

import './social.css';

class Social extends Component {
  render() {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">
            <span role="img" aria-label="tools">
                ⚒
            </span> 
            Social
        </p>
        <hr />
        <SocialLinks />
        <TwitterPin />
      </div>;
  }
}

const SocialLinks = () => {
    return <div className="social-card-holder">
        <h3 style={{ marginBottom: 10 }}>Ping Me</h3>
        <div className="socialCards">
            <SocialCard icon={DevBadge} social={"Dev.To"} link={"https://dev.to/droidmakk"} />
            <SocialCard icon={LinkedIn} social={"LinkedIn"} link={"https://linkedin.com/in/droidmakk"} />
            <SocialCard icon={Octocat} social={"GitHub"} link={"https://github.com/droidmakk"} />
            <SocialCard icon={WhatsApp} social={"WhatsApp"} link={"https://api.whatsapp.com/send?phone=918939717211"} />
            <SocialCard icon={Fb} social={"Facebook"} link={"https://fb.me/droidmakk"} />
            <SocialCard icon={Twitter} social={"Twitter"} link={"https://twitter.com/droidmakk"} />
        </div>
      </div>;
}

const TwitterPin = () => {
    return <Fragment>
        <TweetEmbed id=" 1000653314978033664" />
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="droidmakk"
            options={{ height: 400 }}
        />
      </Fragment>;
}


export { Social };