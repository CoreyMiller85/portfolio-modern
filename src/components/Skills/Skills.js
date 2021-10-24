import React from "react";
import nodeLogoSmall from "../../img/logos/node-small.png";
import reactLogoSmall from "../../img/logos/react-small.png";
import mongoLogoSmall from "../../img/logos/mongodb-icon-small.png";
import cssLogoSmall from "../../img/logos/css3.png";
import htmlLogoSmall from "../../img/logos/html5.png";
import sassLogo from "../../img/logos/sassLogo.png";

const Skills = () => {
	return (
		<div className="Skills" id="skills">
			<div className="title pink-neon tilt-left">
				<span className="title__letter">S</span>
				<span className="title__letter blink">K</span>
				<span className="title__letter">I</span>
				<span className="title__letter flicker-slow">L</span>
				<span className="title__letter">L</span>
				<span className="title__letter">S</span>
			</div>
			<div className="Skills__logos">
				<div className="wrapper">
					<img src={reactLogoSmall} className="logo" alt="react logo" />
				</div>
				<div className="wrapper">
					<img src={nodeLogoSmall} className="logo" alt="node.js logo" />
				</div>
				<div className="wrapper">
					<img src={mongoLogoSmall} className="logo" alt="MongoDB logo" />
				</div>
				<div className="wrapper">
					<img src={htmlLogoSmall} className="logo" alt="HTML5 logo" />
				</div>
				<div className="wrapper">
					<img src={cssLogoSmall} className="logo" alt="CSS3 logo" />
				</div>
				<div className="wrapper">
					<img src={sassLogo} className="logo" alt="Sass logo" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
