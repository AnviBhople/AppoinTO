import React from "react";
import { useNavigate } from "react-router-dom";

function Counseling() {
	const navigate = useNavigate();

	const categories = [
		{ name: "Psychologist", value: "psychologist", icon: "🧠" },
		{ name: "Psychiatrist", value: "psychiatrist", icon: "💊" },
		{ name: "Therapist", value: "therapist", icon: "💬" },
	];

	return (
		<div
			style={{
				backgroundColor: "#f5f3f4",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}>
			<div className="container py-5">
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						Find <span style={{ color: "#023e8a" }}>Counseling Services</span>
					</h1>
				</div>

				<div className="row g-4">
					{categories.map((cat, index) => (
						<div className="col-md-4" key={index}>
							<div
								onClick={() => navigate(`/counseling/${cat.value}`)}
								style={{
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									borderRadius: "20px",
									border: "2px solid white",
									padding: "50px 20px",
									textAlign: "center",
									height: "250px",
									cursor: "pointer",
									boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
									transition: "0.3s",
									color: "white",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform =
										"scale(1.1) translateY(-10px)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = "scale(1) translateY(0)")
								}>
								<div style={{ fontSize: "60px" }}>{cat.icon}</div>
								<h3 className="fw-bold mt-3">{cat.name}</h3>
								<p className="fw-bold mt-2">Click to explore →</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Counseling;
