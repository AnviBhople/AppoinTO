import React, { useState } from "react";

function Contact() {
	const mainStyle = {
		backgroundColor: "#f5f3f4",
		fontFamily: "Times New Roman",
		minHeight: "100vh",
	};

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "15px",
		padding: "30px",
		boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
		transition: "0.3s ease",
		color: "white",
		height: "100%",
	};

	const inputStyle = {
		borderRadius: "10px",
		padding: "12px",
		border: "none",
	};

	const buttonStyle = {
		background: "#fff",
		color: "#023e8a",
		border: "2px solid #023e8a",
		borderRadius: "10px",
		padding: "12px",
		fontWeight: "bold",
		fontSize: "20px",
		transition: "0.3s",
		marginLeft: "200px",
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// show alert with user data
		alert(
			`Thank you ${formData.name}!\n\nYour message has been received:\n"${formData.message}"`,
		);

		// simulate backend
		console.log("User Message:", formData);

		// show success message
		setSubmitted(true);

		// clear form
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div style={mainStyle} className="py-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="fw-bold display-4">
						Contact <span style={{ color: "#023e8a" }}>AppoinTO</span>
					</h1>

					<p className="fw-bold mt-3" style={{ fontSize: "18px" }}>
						We’re here to help you. Reach out for any queries or support.
					</p>
				</div>

				<div className="row g-4">
					{/* FORM SIDE */}
					<div className="col-md-6">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform =
									"scale(1.05) translateY(-5px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1) translateY(0)")
							}>
							<h2 className="fw-bold text-center">Send Us a Message</h2>

							<br />

							{/* SUCCESS MESSAGE */}
							{submitted && (
								<div className="alert alert-success text-center fw-bold">
									Message sent successfully!
								</div>
							)}

							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										className="form-control"
										style={inputStyle}
										value={formData.name}
										onChange={handleChange}
									/>
								</div>

								<div className="mb-3">
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										className="form-control"
										style={inputStyle}
										value={formData.email}
										onChange={handleChange}
									/>
								</div>

								<div className="mb-3">
									<textarea
										rows="5"
										name="message"
										placeholder="Your Message"
										className="form-control"
										style={inputStyle}
										value={formData.message}
										onChange={handleChange}
									/>
								</div>

								<button
									type="submit"
									className="w-70"
									style={buttonStyle}
									onMouseEnter={(e) =>
										(e.currentTarget.style.transform = "scale(1.05)")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.transform = "scale(1)")
									}>
									Send Message
								</button>
							</form>
						</div>
					</div>

					{/* INFO SIDE */}
					<div className="col-md-5 gap-2">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform =
									"scale(1.05) translateY(-5px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1) translateY(0)")
							}>
							<h2 className="fw-bold mb-4 text-center">Get in Touch</h2>

							<p className="fw-bold fs-5">📧 appoinTO@email.com</p>
							<p className="fw-bold fs-5">📞 +91 1234567890</p>
							<p className="fw-bold fs-5">📍 Pune, Maharashtra</p>

							<hr style={{ borderColor: "#023e8a" }} />

							<h2 className="fw-bold mt-4 text-center">Support Hours</h2>

							<br />

							<h5 className="fw-bold">Monday – Saturday: 9 AM – 8 PM</h5>
							<h5 className="fw-bold">Sun: Closed</h5>
						</div>
					</div>
				</div>

				{/* BOTTOM */}
				<div className="text-center mt-5">
					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						We Value Your Feedback
					</h3>

					<p className="fw-bold mt-3" style={{ fontSize: "18px" }}>
						Your suggestions help us improve AppoinTO and provide a better
						experience.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
