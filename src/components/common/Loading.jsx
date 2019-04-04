import React from 'react';

export const Loading = () => {
    return(
        <div className="LoadHolder">
            <div className="LoadingText" >Loading</div>
            <div className="loaderTweak">
                <div  className="lds-dual-ring"></div>
            </div>
        </div>
    )
}