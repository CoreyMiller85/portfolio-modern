import React, { useState } from "react";
import { IconContext } from "react-icons";

import { CgMenuRound } from "react-icons/cg";
import SlideMenu from "../SlideMenu/SlideMenu";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<div className="header">
			<h1 className="header__logo">
				<span className="first">Corey</span>{" "}
				<span className="last">Miller</span>
			</h1>
			<div className="header__hamburger">
				<IconContext.Provider value={{ color: "white", size: "3rem" }}>
					<CgMenuRound
						height="4rem"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
				</IconContext.Provider>
			</div>
			<ul className="header__list">
				<li className="list__li btn sm">
					<a href="#">About</a>
				</li>
				<li className="list__li btn sm">
					<a href="#">Projects</a>
				</li>
				<li className="list__li btn sm">
					<a href="#">Skills</a>
				</li>
				<li className="list__li btn sm">
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
