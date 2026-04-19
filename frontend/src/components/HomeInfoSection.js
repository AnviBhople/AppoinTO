import React from "react";
import whoweare from "./images/whoweare.png";
import whychoseus from "./images/whychoseus.png";

function HomeInfoSection() {
	const sectionStyle = {
		fontFamily: "Times New Roman",
		textAlign: "center",
		backgroundColor: "#f5f3f4",
		minHeight: "100vh",
		paddingTop: "40px",
		paddingBottom: "40px",
	};

	const titleStyle = {
		fontSize: "38px",
		fontWeight: "bold",
		color: "#023e8a",
		marginBottom: "15px",
	};

	const textStyle = {
		fontSize: "18px",
		lineHeight: "1.8",
		color: "#03045e",
		fontWeight: "500",
		textAlign: "justify",
	};

	const imageStyle = {
		width: "100%",
		maxWidth: "450px",
		borderRadius: "18px",
		boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
		border: "1px solid white",
		backgroundColor: "#faedcd",
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="row align-items-center mb-5">
					<div className="col-md-6">
						<h2 style={titleStyle}>Who We Are</h2>
						<br />
						<p style={textStyle}>
							We are a unified healthcare appointment platform designed to
							connect users with trusted medical professionals, wellness
							experts, and counseling services across multiple cities in India.
							Our mission is to simplify healthcare access by bringing verified
							providers, transparent ratings, and instant booking into one
							seamless system. We aim to reduce the gap between patients and
							healthcare services by making it easier to discover, compare, and
							book appointments without long waiting times or confusing
							processes. Every listed provider is carefully organized by
							category, location, and rating so users can make informed
							decisions with confidence. Our platform is built with the idea
							that healthcare should be simple, fast, and accessible to
							everyone. Whether it is a general consultation, mental health
							support, or wellness guidance, users can find the right expert
							within seconds. By combining technology with healthcare needs, we
							strive to create a reliable digital ecosystem that improves
							overall health outcomes and user experience. We continuously work
							towards expanding our network of professionals across more cities
							to ensure wider accessibility.
						</p>
					</div>

					<div className="col-md-6 text-center">
						<img src={whoweare} alt="Who We Are" style={imageStyle} />
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className="row align-items-center">
					<div className="col-md-6 text-center order-md-1 order-2">
						<img src={whychoseus} alt="Why Choose Us" style={imageStyle} />
					</div>

					<div className="col-md-6 order-md-2 order-1">
						<h2 style={titleStyle}>Why Choose Us</h2>
						<br />{" "}
						<p style={textStyle}>
							Users choose our platform because it eliminates the complexity of
							finding and booking healthcare services. Instead of visiting
							multiple websites or making endless calls, everything is available
							in one organized and easy-to-use system.We provide verified
							listings of doctors, clinics, wellness centers, and counselors so
							users can trust the information they see. Ratings, reviews, and
							location-based filtering help users quickly identify the most
							suitable provider for their needs. Our system is designed for
							speed and convenience. With just a few clicks, users can browse
							categories, view provider details, and book appointments instantly
							without delays or confusion.We also prioritize user experience and
							accessibility, ensuring that both first-time and returning users
							can navigate the platform effortlessly. From healthcare to
							wellness and mental health support, we aim to make quality care
							available anytime, anywhere. Ultimately, our goal is to empower
							users to take control of their health decisions with confidence,
							clarity, and ease.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeInfoSection;
