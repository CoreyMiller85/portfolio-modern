import React from "react";
import placeholder800x600 from "../../img/placeholder-800x600.jpeg";

const SingleProject = ({ title }) => {
	return (
		<div className="single-project">
			<div className="single-project__image">
				<img src={placeholder800x600} alt="" />
			</div>

			<h3 className="single-project__title">{title}</h3>
			<p className="single-project__description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quibusdam vitae provident suscipit laborum amet illo maxime officia
				voluptatum harum officiis asperiores porro quasi earum architecto fuga
				ex tenetur quis molestiae nemo cumque esse? Obcaecati placeat enim
				dolore itaque officia blanditiis, quod impedit beatae praesentium dicta
				at accusamus inventore natus?
			</p>
		</div>
	);
};

export default SingleProject;
