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
				<div className="hero__name-span-container">
					<span className="hero__content__name-span">
						Corey Miller <br /> is a ...
					</span>
					<span className="hero__content__name-span"></span>
				</div>
				<h1 className="hero__content__headline">
					Creator of powerful & well engineered user focused web applications
				</h1>
				<p className="hero__content__copy">
					I started young making modifications to video games I loved, and
					branched into creating art for those mods. Now I take that same
					creative energy and put it into creating applications that are easy to
					use, and functional.
				</p>
				<p className="hero__content__copy">
					With my attention to detail and drive, I am excited to learn new
					things and try new approaches. Let's work together to make something
					awesome!
				</p>
				<button className="btn clear">Projects</button>
				<button className="btn green">Contact</button>
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
