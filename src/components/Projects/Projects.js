import React from "react";
import SingleProject from "../SingleProject/SingleProject";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="title">
				<div className="title__span__container">
					<span className="title__span">P</span>
					<span className="title__span">R</span>
					<span className="title__span">O</span>
					<span className="title__span">J</span>
					<span className="title__span">E</span>
					<span className="title__span">C</span>
					<span className="title__span">T</span>
					<span className="title__span">S</span>
				</div>
			</div>
			<div className="projects__container">
				<SingleProject
					title={"Mtg Server"}
					tags={["node", "axios"]}
					desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quibusdam vitae provident suscipit laborum amet illo maxime officia
				voluptatum harum officiis asperiores porro quasi earum architecto fuga
				ex tenetur quis molestiae nemo cumque esse? Obcaecati placeat enim
				dolore itaque officia blanditiis, quod impedit beatae praesentium dicta
				at accusamus inventore natus?"
					gitLink="https://github.com/CoreyMiller85/mtg-api-server"
					liveLink=""
				/>
			</div>
		</div>
	);
};

export default Projects;
