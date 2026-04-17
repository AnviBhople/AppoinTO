import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { counselingProviders } from "../data/counselingProviders";

function CounselingCategory() {
	const { category } = useParams();

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	// FILTER LOGIC
	const filtered = counselingProviders.filter((p) => {
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

	// FALLBACK
	const finalData =
		filtered.length > 0
			? filtered
			: counselingProviders.filter((p) => p.category === category);

	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #caf0f8, #ade8f4)",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}
			className="py-5">
			<div className="container">
				{/* HEADER */}
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						{category.toUpperCase()} Counseling
					</h1>

					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						Find trusted counselors near you
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
									background: "linear-gradient(135deg, #80ced7, #48cae4)",
									borderRadius: "15px",
									padding: "20px",
									boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
									transition: "0.3s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform =
										"scale(1.05) translateY(-8px)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = "scale(1) translateY(0)")
								}>
								<h4 className="fw-bold" style={{ fontSize: "23px" }}>
									{p.name}
								</h4>

								<p className="fw-bold" style={{ fontSize: "18px" }}>
									{p.address}
								</p>

								<p className="fw-bold">⭐ {p.rating}</p>

								<p style={{ fontWeight: "bold", color: "#023e8a" }}>
									📍 {p.address}
								</p>

								<div className="d-flex gap-2 mt-3">
									<button className="btn btn-dark w-50">Book Now</button>

									<a
										href={`https://www.google.com/maps/search/?api=1&query=${p.name}+${p.address}`}
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary w-50">
										View Map
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default CounselingCategory;
