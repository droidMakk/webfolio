import React from 'react';
import PropTypes from 'prop-types';

export const CardSection = ({ children }) => {
    return(
        <div style={cardsection_style}>
            {children}
        </div>
    )
}

// CardSection.propTypes = {
//     children: PropTypes.node.isRequired
// }

const cardsection_style = {
    fontSize: 'x-large',
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "5%"
}
