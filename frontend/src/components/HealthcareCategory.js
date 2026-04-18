import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { providers } from "../data/healthcareProviders";

function HealthcareCategory() {
	const { category } = useParams();
	const navigate = useNavigate();

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	// FILTER LOGIC
	const filtered = providers.filter((p) => {
		const matchCategory = p.category === category;

		if (!userLocation || userLocation.trim() === "") {
			return matchCategory;
		}

		const locationLower = userLocation.toLowerCase();

		const matchLocation =
			p.address.toLowerCase().includes(locationLower) ||
			locationLower.includes("pune");

		return matchCategory && matchLocation;
	});

	// FALLBACK (VERY IMPORTANT)
	const finalData =
		filtered.length > 0
			? filtered
			: providers.filter((p) => p.category === category);

	return (
		<div
			style={{
				backgroundColor: "#f5f3f4",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}
			className="py-5">
			<div className="container">
				{/* HEADER */}
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						{category.toUpperCase()} Specialists
					</h1>

					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						Showing clinics near you
					</h3>

					{userLocation && (
						<p className="fw-bold text-primary">Location: {userLocation}</p>
					)}

					{filtered.length === 0 && userLocation && (
						<p className="text-danger fw-bold">
							No exact matches found, showing nearby results
						</p>
					)}
				</div>

				<div className="row g-4">
					{finalData.map((p) => (
						<div className="col-md-4" key={p.id}>
							<div
								style={{
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									borderRadius: "10px",
									border: "2px sloid white",
									padding: "20px",
									boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
									transition: "0.3s",
									color: "white",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform =
										"scale(1.05) translateY(-8px)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = "scale(1) translateY(0)")
								}>
								<h4 className="fw-bold" style={{ fontSize: "25px" }}>
									{p.name}
								</h4>

								<p className="fw-bold" style={{ fontSize: "18px" }}>
									{p.address}
								</p>

								<p className="fw-bold">⭐ {p.rating}</p>

								<p style={{ fontWeight: "bold", color: "#fff" }}>
									📍 {p.address}
								</p>

								<div className="d-flex gap-2 mt-3">
									<button
										className="btn btn-dark w-50"
										onClick={() => navigate(`/book/${p.category}/${p.id}`)}>
										Book Now
									</button>

									<Link
										to={`https://www.google.com/maps/search/?api=1&query=${p.name}+${p.address}`}
										target="_blank"
										rel="noreferrer"
										className="btn w-50 fw-bold"
										style={{
											backgroundColor: "#ffffff",
											border: "2px solid #0a66c2",
											color: "#0a66c2",
											fontFamily: "Times New Roman",
											borderRadius: "8px",
											textAlign: "center",
											transition: "0.3s",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = "#fff";
											e.currentTarget.style.color = "#0a66c2";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = "#ffffff";
											e.currentTarget.style.color = "#0a66c2";
										}}>
										View Map
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HealthcareCategory;
