import React from "react";
import { useNavigate } from "react-router-dom";
import healthcareImg from "./images/healthcare.png";
import wellnessImg from "./images/wellness.png";
import counselingImg from "./images/counseling.png";

function Categories() {
	const navigate = useNavigate();

	const sectionStyle = {
		fontFamily: "Times New Roman",
		textAlign: "center",
		backgroundColor: "#f5f3f4",
		minHeight: "100vh",
		paddingTop: "40px",
		paddingBottom: "40px",
	};

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "18px",
		transition: "0.3s ease",
		boxShadow: "0 12px 25px rgba(0,0,0.7)",
		height: "600px",
		display: "flex",
		border: "1px solid white",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
		justifyContent: "flex-start",
		padding: "20px",
		cursor: "pointer",
		color: "#fff",
	};

	const imageStyle = {
		width: "250px",
		height: "230px",
		objectFit: "cover",
		borderRadius: "10px",
		marginTop: "10px",
		border: "1px solid white",
		marginBottom: "15px",
		boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
	};

	const descStyle = {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#fff",
		marginTop: "4px",
	};

	const aboutStyle = {
		fontSize: "17px",
		color: "#fff",
		marginTop: "10px",
		padding: "0 10px",
		fontFamily: "Arial",
		lineHeight: "1.2",
		fontWeight: "normal",
		textAlign: "justify",
	};

	const categories = [
		{
			name: "Healthcare",
			img: healthcareImg,
			desc: "Doctors, Clinics & Specialists",
			about:
				"Healthcare connects you with verified medical professionals, including general physicians, specialists, and diagnostic centers. Whether you need a routine check-up or specialized care, you can easily browse trusted providers near you. Our platform allows you to compare ratings, distance, and availability to make informed health decisions. Book appointments instantly and access quality medical care without the long wait or confusion.",
			path: "/healthcare",
		},
		{
			name: "Wellness",
			img: wellnessImg,
			desc: "Yoga, Fitness & Spa",
			about:
				"Wellness focuses on balancing physical and mental health through yoga, fitness, meditation, and holistic healing. Our curated providers help you reduce stress, build strength, and maintain a healthy lifestyle. Whether you are a beginner or an expert, you can explore centers that match your goals and schedule. Take control of your well-being and invest in long-term health and relaxation.",
			path: "/wellness",
		},
		{
			name: "Counseling",
			img: counselingImg,
			desc: "Therapists & Mental Health",
			about:
				"Counseling provides access to certified therapists specializing in stress, anxiety, and personal growth. In a safe, confidential environment, you can receive expert guidance tailored to your specific needs. Our platform helps you find trusted professionals based on ratings and specialization, ensuring you get support when it matters most. Remember, your mental health is just as important as your physical health.",
			path: "/counseling",
		},
	];

	return (
		<div className="container my-5" style={sectionStyle}>
			<h2 className="fw-bold display-6">Categories We Cater To</h2>

			<h5
				className="mt-3 fw-bold"
				style={{ color: "#023e8a", textAlign: "center" }}>
				Explore a thoughtfully designed range of healthcare, wellness, and
				counseling services aimed at improving your physical health, mental
				balance, and lifestyle. Connect with verified professionals, compare
				options, and choose care that fits your needs best.{" "}
			</h5>

			<div className="row mt-5 g-4 justify-content-center">
				{categories.map((cat, i) => (
					<div className="col-md-4" key={i}>
						<div
							style={cardStyle}
							onClick={() => navigate(cat.path)}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<img src={cat.img} alt={cat.name} style={imageStyle} />

							<h5
								className="fw-bold"
								style={{ fontSize: "26px", cursor: "pointer" }}
								onClick={(e) => {
									e.stopPropagation();
									navigate(cat.path);
								}}>
								{cat.name}
							</h5>

							<p style={descStyle}>{cat.desc}</p>

							<p style={aboutStyle}>{cat.about}</p>
							<br />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Categories;
