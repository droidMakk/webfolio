import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Test } from '../articles';
import { AnimationComponent } from '../components/common';


export class Blogs extends React.Component {
  render() {
    return (
      <AnimationComponent>
        <div className="displaydetailcard">
          <p className="displaydetailTitle">
            <span role="img" aria-label="blogs" >
              ✍🏼
            </span> Blogs
          </p>
          <hr/>
          <div>
            <ReactMarkdown source={Test} />
          </div>
        </div>
      </AnimationComponent>
    )
  }
}
