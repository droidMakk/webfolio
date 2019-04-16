import React from "react";
import PropTypes from "prop-types";

export const Input = props => {
	return props.type ? (
		<div>
            <label>{props.label}</label>
            <input {...props} />
		</div>
	) : (
		<div className="input-effect" style={{ width: props.width }}>
			<input {...props} className="effect-23" />
			<label>{props.label}</label>
			<span className="focus-bg" />
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	width: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.any
};
