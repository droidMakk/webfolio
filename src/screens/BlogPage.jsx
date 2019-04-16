import React from 'react';
import PropTypes from 'prop-types';

import { AnimationComponent } from '../components/common';
import { Test } from '../articles';
import { CustomMarkDown as ReactMarkdown } from '../components';

export class BlogPage extends React.Component {
    render(){

        let { params } = this.props.match;

        return(
            <AnimationComponent>
                <div className="displaydetailcard">
                    <p className="displaydetailTitle">
                        <span style={{ float: 'left', cursor: 'pointer' }} onClick={() => { this.props.history.go(-1) }} >👈🏼</span>
                        {`Dummy title ${params.blogid}`}
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

BlogPage.propTypes = {
    match: PropTypes.any
}