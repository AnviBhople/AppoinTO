import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Wellness() {
	const navigate = useNavigate();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	const categories = [
		{ name: "Yoga", value: "yoga", icon: "🧘" },
		{ name: "Fitness", value: "fitness", icon: "🏋️" },
		{ name: "Spa", value: "spa", icon: "💆" },
	];

	return (
		<div
			style={{
				backgroundColor: "#f5f3f4,",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}>
			<div className="container py-5">
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						Explore <span style={{ color: "#023e8a" }}>Wellness Services</span>
					</h1>

					{userLocation && (
						<p className="fw-bold text-primary">Location: {userLocation}</p>
					)}
				</div>

				<div className="row g-4">
					{categories.map((cat, index) => (
						<div className="col-md-4" key={index}>
							<div
								onClick={() =>
									navigate(
										`/wellness/${cat.value}?location=${userLocation || ""}`,
									)
								}
								style={{
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									borderRadius: "20px",
									border: "2px solid white",
									padding: "50px 20px",
									textAlign: "center",
									height: "250px",
									width: "380px",
									cursor: "pointer",
									color: "white",
									boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
									transition: "0.3s",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform =
										"scale(1.1) translateY(-10px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1) translateY(0)";
								}}>
								<div style={{ fontSize: "60px" }}>{cat.icon}</div>
								<h3 className="fw-bold mt-3">{cat.name}</h3>
								<p className="fw-bold mt-2" style={{ fontSize: "17px" }}>
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

export default Wellness;
