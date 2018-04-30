import React,{ Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './routeswitcher.css'

class AnimationComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            isVisible: true
        };

        this.closeComponent = ev => {
            ev.preventDefault();
            this.setState({isVisible: false});
        }
    }

    render(){
        return(
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600} 
                transitionEnterTimeout={600} 
                transitionLeaveTimeout={200} 
                transitionName="loadComponent">
            {this.state.isVisible ?
            this.props.children: null}
            </ReactCSSTransitionGroup>
        )
    }
}

export default AnimationComponent;