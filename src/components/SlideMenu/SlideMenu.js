import React from "react";
import "./SlideMenu.scss";

const SlideMenu = ({ isMenuOpen, active, setIsMenuOpen }) => {
	return (
		<div className={`slide-menu ${active}`}>
			<span
				className="close"
				aria-label="close menu"
				onClick={() => setIsMenuOpen(false)}
			>
				X
			</span>
			<ul className="slide-menu__list">
				<li className="slide-menu__li">
					<a href="#">About</a>
				</li>
				<li className="slide-menu__li">
					<a href="#">Projects</a>
				</li>
				<li className="slide-menu__li">
					<a href="#">Skills</a>
				</li>
				<li className="slide-menu__li">
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default SlideMenu;
