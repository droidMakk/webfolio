import React from 'react';

const SlickCard =({cardImg, cardImgAlt, titleText}) => {
    return(
        <div style={{ padding: 10 }} >
            <div className="cardHolder">
                <img src={cardImg} alt={cardImgAlt} className="cardImage" />
                <hr style={{ marginLeft: 15,marginRight: 15 }}/>
                <p className="cardTitle" >{titleText}</p>
            </div>
        </div>
    )
}

export default SlickCard;