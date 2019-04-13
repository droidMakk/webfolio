import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ArticleCard = props => {
    return(
        <Link to={`/blogs${props.link}`} >
            <div key={props.title+props.description} className="bloglistcard" >
                <h3 style={{ fontWeight: '500' }} >{props.title}</h3>
                <hr style={{ width: '50%', marginLeft: '0px' }} />
                <p style={{ fontSize: '10', color: 'grey' }} >{props.date}</p>
                <p>{props.description}</p>
            </div>
        </Link>
    )
}

ArticleCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string
}