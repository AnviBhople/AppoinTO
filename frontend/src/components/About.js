import React from "react";

function About() {
	const mainStyle = {
		backgroundColor: "#f5f3f4",
		fontFamily: "Times New Roman",
		minHeight: "100vh",
	};

	const accentStyle = {
		color: "#023e8a",
		fontWeight: "bold",
	};

	const sectionStyle = {
		// background: "rgba(255,255,255,0.6)",
		backgroundColor: "#e2ece9",
		padding: "30px",
		borderRadius: "15px",
		boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
		backdropFilter: "blur(10px)",
		border: "1px solid #bee1e6",
		marginBottom: "40px",
		transition: "transform 0.3s ease",
	};

	const cardStyle = {
		// background: "linear-gradient(135deg, #80ced7, #48cae4)",
		backgroundColor: "#90e0ef",
		borderRadius: "15px",
		padding: "30px",
		textAlign: "center",
		boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
		transition: "transform 0.3s ease",
	};

	return (
		<div style={mainStyle} className="py-5">
			<div className="container">
				{/* HEADER */}
				<div className="text-center mb-5">
					<h1 className="fw-bold display-4">
						About <span style={accentStyle}>AppoinTO</span>
					</h1>

					<p style={{ fontSize: "22px", fontWeight: "bold", color: "#03045e" }}>
						A simple and trusted way to discover and book healthcare and
						wellness services.
					</p>
				</div>

				{/* WHO WE ARE */}
				<div
					style={sectionStyle}
					onMouseEnter={(e) =>
						(e.currentTarget.style.transform = "scale(1.02)")
					}
					onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
					<h2 style={accentStyle}>Who We Are</h2>

					<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
						AppoinTO is a healthcare appointment booking platform designed to
						simplify how people connect with medical and wellness professionals.
						We started with a simple observation — finding the right doctor or
						therapist is often confusing, time-consuming, and unreliable in many
						cases because people depend on scattered information, long waiting
						queues, and outdated booking systems. Our goal is to change that
						experience by building a single, trusted platform where users can
						discover verified healthcare providers, compare services, and book
						appointments instantly without unnecessary friction. We are a small
						but passionate team that believes technology should make healthcare
						more human, not more complicated.
					</p>
				</div>

				{/* MISSION */}
				<div
					style={sectionStyle}
					onMouseEnter={(e) =>
						(e.currentTarget.style.transform = "scale(1.02)")
					}
					onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
					<h2 style={accentStyle}>Our Mission</h2>

					<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
						Our mission is to make healthcare simple, fast, and accessible by
						removing barriers between patients and trusted professionals. We aim
						to ensure that anyone, regardless of location or background, can
						quickly find the right healthcare provider without stress or
						confusion.
					</p>
				</div>

				{/* STATS */}
				<div className="row text-center mb-5 g-4">
					<div className="col-md-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<h1 style={accentStyle}>500+</h1>
							<p style={{ fontWeight: "bold", fontSize: "18px" }}>
								Verified Providers
							</p>
						</div>
					</div>

					<div className="col-md-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<h1 style={accentStyle}>10k+</h1>
							<p style={{ fontWeight: "bold", fontSize: "18px" }}>
								Appointments Booked
							</p>
						</div>
					</div>

					<div className="col-md-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<h1 style={accentStyle}>24/7</h1>
							<p style={{ fontWeight: "bold", fontSize: "18px" }}>
								Support Availability
							</p>
						</div>
					</div>
				</div>

				{/* WHY EXISTS */}
				<div
					style={sectionStyle}
					onMouseEnter={(e) =>
						(e.currentTarget.style.transform = "scale(1.02)")
					}
					onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
					<h2 style={accentStyle}>Why AppoinTO Exists</h2>

					<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
						Healthcare access should not depend on luck, referrals, or long
						waiting times. We built AppoinTO because people deserve a faster and
						more transparent way to find care. Instead of calling multiple
						clinics or searching across different platforms, users can now see
						everything in one place — making the process smoother and more
						reliable.
					</p>
				</div>

				{/* FINAL */}
				<div className="text-center mt-5">
					<h2 style={accentStyle}>Built with Care</h2>

					<p style={{ fontSize: "18px", lineHeight: "1.8" }}>
						AppoinTO is built to make healthcare feel simpler, more human, and
						more reliable for everyone.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
