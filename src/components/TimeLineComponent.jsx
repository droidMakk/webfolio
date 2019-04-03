import React from "react";
import PropTypes from 'prop-types';

export const TimeLineComponent = props => {
	return (
		<div className="container">
			<div className="timeline-block timeline-block-right">
				<div className="marker" />
				<div className="timeline-content">
					<h3>{props.title}</h3>
					<span>{props.subHeading}</span>
					<p>
						{props.content}
					</p>
				</div>
			</div>
		</div>
	);
};

TimeLineComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
