import React from "react";

const Section = ({ title }) => {
	return (
		<div className={`${title.toLowerCase()}`}>
			<h3>{title}</h3>
		</div>
	);
};

export default Section;
