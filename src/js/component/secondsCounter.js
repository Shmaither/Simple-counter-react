import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	return <h1>{props.value}</h1>;
};

SecondsCounter.propTypes = {
	value: PropTypes.number
};
