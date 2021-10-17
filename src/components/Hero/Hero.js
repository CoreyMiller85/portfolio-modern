import React from "react";
import typing from "../../Videos/typing.mp4";
import "./Hero.scss";

const Hero = () => {
	return (
		<div className="hero" style={{ background: `URL(${typing})` }}>
			<video width="100%" autoPlay loop id="hero-video">
				<source src={typing} type="video/mp4" />
			</video>
			<div className="hero__content"></div>
		</div>
	);
};

export default Hero;
