import React, { useState } from "react";
import Header from "./components/Header/Header";
import SlideMenu from "./components/SlideMenu/SlideMenu";
import Hero from "./components/Hero/Hero";
import "./App.scss";
const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const slideMenu = isMenuOpen ? (
		<SlideMenu
			isMenuOpen={isMenuOpen}
			active="active"
			setIsMenuOpen={setIsMenuOpen}
		/>
	) : (
		<SlideMenu active="" />
	);
	return (
		<div className="app">
			{slideMenu}
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<Hero />
		</div>
	);
};

export default App;
