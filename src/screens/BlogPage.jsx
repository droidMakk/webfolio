import React from 'react';
import ReactMarkdown from 'react-markdown';

import { AnimationComponent } from '../components/common';
import { Test } from '../articles';

export class BlogPage extends React.Component {
    render(){

        let { params } = this.props.match;

        return(
            <AnimationComponent>
                <div className="displaydetailcard">
                    <p className="displaydetailTitle">
                        <span style={{ float: 'left', cursor: 'pointer' }} onClick={() => { this.props.history.go(-1) }} >{`<`}</span>
                        {`Blog Title ${params.blogid}`}
                        <span role="img" aria-label="">
                            📝
                        </span>{" "}
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