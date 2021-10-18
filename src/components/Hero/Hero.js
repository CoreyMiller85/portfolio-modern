import React from "react";
import typing from "../../Videos/close-pavel-danilyuk.mp4";
import "./Hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__container">
				<video autoplay="autoplay" playsinline loop="loop" id="hero-video">
					<source src={typing} type="video/mp4" />
				</video>
			</div>
			<div className="hero__content">
				<h1>Corey Miller web dev</h1>
			</div>
		</div>
	);
};

export default Hero;

// <div id="videoDiv">
// <video id="video1" preload="" autoplay="" muted="" playsinline="" loop="">
// <source src="video/t13.mp4" type="video/mp4">
// </video>
// </div>
