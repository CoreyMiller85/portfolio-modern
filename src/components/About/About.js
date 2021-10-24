import React from "react";

const About = () => {
	return (
		<div className="about" id="about">
			<div className="title pink-neon tilt-left">
				<span className="title__letter">A</span>
				<span className="title__letter">B</span>
				<span className="title__letter blink">O</span>
				<span className="title__letter flicker-fast">U</span>
				<span className="title__letter flicker-slow">T</span>
			</div>
			<div>
				<p className="hero__content__copy">
					I started young making modifications to video games I loved, and
					branched into creating art for those mods. Now I take that same
					creative energy and put it into creating applications that are easy to
					use, fun and functional.
				</p>
				<p className="hero__content__copy">
					With my attention to detail and drive, I am excited to learn new
					things and try new approaches. Let's work together to make something
					awesome!
				</p>
			</div>
		</div>
	);
};

export default About;
