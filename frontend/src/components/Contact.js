import React, { useState, useEffect } from "react";

function Contact() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const mainStyle = {
		backgroundColor: "#f5f3f4",
		fontFamily: "Times New Roman",
		minHeight: "100vh",
	};

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "15px",
		padding: isMobile ? "20px" : "30px",
		boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
		transition: "0.3s ease",
		color: "white",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};

	const inputStyle = {
		borderRadius: "10px",
		padding: "12px",
		border: "none",
		width: "100%",
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
		width: isMobile ? "100%" : "200px",
		display: "block",
		margin: isMobile ? "10px auto" : "10px 0 10px auto",
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
		alert(`Thank you ${formData.name}!\n\nYour message has been received.`);
		setSubmitted(true);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div style={mainStyle} className="py-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1
						className="fw-bold"
						style={{ fontSize: isMobile ? "2.5rem" : "3.5rem" }}>
						Contact <span style={{ color: "#023e8a" }}>AppoinTO</span>
					</h1>
					<p
						className="fw-bold mt-3"
						style={{ fontSize: isMobile ? "16px" : "18px" }}>
						We’re here to help you. Reach out for any queries or support.
					</p>
				</div>

				<div className="row g-4 justify-content-center">
					<div className="col-lg-6 col-md-12">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform =
									"scale(1.02) translateY(-5px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1) translateY(0)")
							}>
							<h2 className="fw-bold text-center mb-4">Send Us a Message</h2>

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
										rows="4"
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
									style={buttonStyle}
									onMouseEnter={(e) =>
										(e.currentTarget.style.backgroundColor = "#f0f0f0")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.backgroundColor = "#fff")
									}>
									Send Message
								</button>
							</form>
						</div>
					</div>

					<div className="col-lg-5 col-md-12">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform =
									"scale(1.02) translateY(-5px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1) translateY(0)")
							}>
							<h2 className="fw-bold mb-4 text-center">Get in Touch</h2>

							<div className="ps-2">
								<p className="fw-bold fs-5">📧 appoinTO@email.com</p>
								<p className="fw-bold fs-5">📞 +91 1234567890</p>
								<p className="fw-bold fs-5">📍 Pune, Maharashtra</p>
							</div>

							<hr style={{ borderColor: "white", opacity: "0.5" }} />

							<h2 className="fw-bold mt-2 text-center">Support Hours</h2>
							<div className="text-center mt-3">
								<h5 className="fw-bold">Monday – Saturday</h5>
								<p>9 AM – 8 PM</p>
								<h5 className="fw-bold">Sunday</h5>
								<p>Closed</p>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center mt-5">
					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						We Value Your Feedback
					</h3>
					<p
						className="fw-bold mt-3"
						style={{ fontSize: "18px", padding: "0 10px" }}>
						Your suggestions help us improve AppoinTO and provide a better
						experience.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
