import React, { Component } from 'react'
import { Input, AnimationComponent } from '../components/common';

export class Work extends Component {
  render() {
    return (
      <AnimationComponent>
        <div className="displaydetailcard">
          <p className="displaydetailTitle">
            <span role="img" aria-label="work" >🔥</span> Hire / Train
          </p>
          <hr/>
          <div>
            <form style={{ display: 'flex-wrap', flexDirection: 'column' }} >
              <Input label="Name" />
              <Input label="Mail ID" />
              <Input type="radio" width="50%" label="Train Me" value="train" name="activity" />
              <Input type="radio"width="50%" label="Work with me" value="work" name="activity" />
              <button type="submit">Train</button>
            </form>
          </div>
        </div>
      </AnimationComponent>
    )
  }
}
