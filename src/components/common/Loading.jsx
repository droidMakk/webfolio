import React,{ Component } from 'react';
import './loading.css';

const Loading = () => {
    return(
        <div className="LoadHolder">
            <div className="LoadingText" >Loading</div>
            <div className="loaderTweak">
                <div  className="lds-dual-ring"></div>
            </div>
        </div>
    )
}





export default Loading;