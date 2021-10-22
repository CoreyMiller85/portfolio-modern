import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_rxcv3wi",
				"template_p8onx9r",
				e.target,
				"user_N96NhZlNAe8XTpWbD5BCs"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div title="Contact Me" id="contact">
			<div className="title pink-neon">
				<div className="title__letter">C</div>
				<div className="title__letter">O</div>
				<div className="title__letter">N</div>
				<div className="title__letter">T</div>
				<div className="title__letter">A</div>
				<div className="title__letter">C</div>
				<div className="title__letter">T</div>
			</div>
			<form className="contact__form" onSubmit={sendEmail}>
				<label htmlFor="name" className="contact__name-label">
					Name:
					<input type="text" name="name" className="contact__name-input" />
				</label>
				<label htmlFor="email" className="contact__email-label">
					Email:
					<input type="email" name="email" className="contact__email-input" />
				</label>
				<label htmlFor="message" className="contact__message-label">
					Message:
					<textarea
						rows="5"
						id="message-box"
						name="message-box"
						className="contact__message-textarea"
						placeholder="Type your message here"
						pattern="^[a-zA-Z1-9].*"
						required=""
					></textarea>
				</label>
				<button className="contact__button">Send</button>
			</form>
		</div>
	);
};

export default Contact;
