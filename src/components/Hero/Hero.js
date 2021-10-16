import React from "react";
import typing from "../../Videos/typing.mp4";
import "./Hero.scss";

const Hero = () => {
	return (
		<div className="hero" style={{ background: `URL(${typing})` }}>
			<video width="100%" autoPlay loop id="hero-video">
				<source src={typing} type="video/mp4" />
			</video>
			<div className="hero__content">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet
					suscipit ut ab quia, commodi, porro sunt nihil, vero maxime recusandae
					ullam sapiente iste nesciunt beatae laboriosam aliquid iusto eius
					incidunt? Ducimus, deleniti. Libero facilis harum consequuntur quidem,
					beatae sapiente maiores, amet eaque sint voluptatibus perspiciatis ex
					eligendi eius possimus!
				</p>
			</div>
		</div>
	);
};

export default Hero;
