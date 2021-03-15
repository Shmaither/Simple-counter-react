import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

import { SecondsCounter } from "./secondsCounter";

//create your first component

export function Home(props) {
	return (
		<>
			<h1>
				<SecondsCounter value={props.value} />
			</h1>
		</>
	);
}

Home.propTypes = {
	value: PropTypes.number
};
