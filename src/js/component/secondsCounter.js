import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	return (
		<div className="bg-dark text-white text-center d-flex justify-content-center">
			<h1>
				<i className="far fa-clock"></i>
			</h1>
			<h1>{Math.floor(props.value / 100000) % 10}</h1>
			<h1>{Math.floor(props.value / 10000) % 10}</h1>
			<h1>{Math.floor(props.value / 1000) % 10}</h1>
			<h1>{Math.floor(props.value / 100) % 10}</h1>
			<h1>{Math.floor(props.value / 10) % 10}</h1>
			<h1>{props.value % 10}</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	value: PropTypes.number
};
