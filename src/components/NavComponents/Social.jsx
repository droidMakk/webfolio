import React, { Component, Fragment } from 'react';
import TweetEmbed from "react-tweet-embed";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import './social.css';
import Card from '../common/Card';

class Social extends Component {
  render() {
    return <div className="displaydetailcard">
        <p className="displaydetailTitle">
            <span role="img" aria-label="social">
                ✋
            </span> 
            Blog & Social
        </p>
        <hr />
        <TwitterPin />
        <Blog />
      </div>;
  }
}

const Blog = () => {
    return(
        <Card>
            <h2>
                <span role="img" aria-label="writing">
                📃
                </span>
                &nbsp;Blogs
            </h2>
            <hr/> 
            <h4 style={{ fontWeight: 100 }}>
                <span role="img" aria-label="social">
                    ✍
                </span>
                 &emsp;Writing...!
            </h4>
        </Card>
    )
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