import React, { Component, Fragment } from 'react';
import Card from "../common/Card";
import TweetEmbed from "react-tweet-embed";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Social extends Component {
  render() {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">Social</p>
        <hr />
        <TwitterPin />
      </div>;
  }
}

const TwitterPin = () => {
    return <Fragment>
        <TweetEmbed id="1000653314978033664" />
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="droidmakk"
            options={{ height: 400 }}
        />
      </Fragment>;
}


export { Social };