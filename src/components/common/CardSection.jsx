import React from 'react';

const CardSection = ({ children }) => {
    return(
        <div style={cardsection_style}>
            {children}
        </div>
    )
}


const cardsection_style = {
    fontSize: 'x-large',
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "5%"
}

export default CardSection;