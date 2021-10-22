import React from "react";
import SingleProject from "../SingleProject/SingleProject";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="title pink-neon">
				<div className="title__letter">P</div>
				<div className="title__letter">R</div>
				<div className="title__letter">O</div>
				<div className="title__letter">J</div>
				<div className="title__letter">E</div>
				<div className="title__letter">C</div>
				<div className="title__letter">T</div>
				<div className="title__letter">S</div>
			</div>
			<div className="projects__container">
				<SingleProject
					title={"Mtg Server"}
					tags={["node", "axios"]}
					desciption="This is a server for my Caster App, this server controls the API end points for searching my extensive MongoDB database of all printed Magic: The Gathering cards. It also controls the user database that is used for authentication and creating a repo of each users collected cards if they so choose. Created as a personal project for myself and friends to use to create and store card collections, and deck lists for playing MTG. Uses JSON Web Tokens for autheti"
					gitLink="https://github.com/CoreyMiller85/mtg-api-server"
					liveLink=""
				/>
			</div>
		</div>
	);
};

export default Projects;
