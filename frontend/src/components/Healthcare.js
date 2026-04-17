import React from "react";
import { useNavigate } from "react-router-dom";

function Healthcare() {
	const navigate = useNavigate();

	const categories = [
		{ name: "General Physician", value: "general", icon: "🩺" },
		{ name: "Dentist", value: "dentist", icon: "🦷" },
		{ name: "Orthopedic", value: "orthopedic", icon: "🦴" },
		{ name: "Eye Specialist", value: "eye", icon: "👁️" },
		{ name: "Dermatologist", value: "derma", icon: "🧴" },
	];

	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #caf0f8, #ade8f4)",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}>
			<div className="container py-5">
				{/* HEADER */}
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						Find <span style={{ color: "#023e8a" }}>Healthcare Services</span>
					</h1>

					<p
						style={{
							fontSize: "18px",
							fontWeight: "bold",
							color: "#03045e",
						}}>
						Choose a category to explore trusted doctors near you
					</p>
				</div>

				{/* CATEGORY CARDS */}
				<div className="row g-4">
					{categories.map((cat, index) => (
						<div className="col-md-4" key={index}>
							<div
								onClick={() => navigate(`/healthcare/${cat.value}`)}
								style={{
									background: "linear-gradient(135deg, #80ced7, #48cae4)",
									borderRadius: "20px",
									padding: "50px 20px",
									textAlign: "center",
									height: "250px",
									width: "380px",
									cursor: "pointer",
									boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
									transition: "0.3s",
									position: "relative",
									overflow: "hidden",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform =
										"scale(1.1) translateY(-10px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1) translateY(0)";
								}}>
								{/* ICON */}
								<div style={{ fontSize: "60px" }}>{cat.icon}</div>

								{/* TITLE */}
								<h3 className="fw-bold mt-3">{cat.name}</h3>

								{/* SUBTEXT */}
								<p
									style={{
										fontWeight: "bold",
										marginTop: "10px",
										fontSize: "20px",
									}}>
									Click to explore →
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Healthcare;
