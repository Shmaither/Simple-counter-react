import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

import { SecondsCounter } from "./secondsCounter";

//create your first component

export const Home = props => {
	return (
		<>
			<SecondsCounter value={props.value} />
		</>
	);
};

Home.propTypes = {
	value: PropTypes.number
};
