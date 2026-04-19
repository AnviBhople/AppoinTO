import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { wellnessProviders } from "../data/wellnessProviders";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function WellnessCategory() {
	const navigate = useNavigate();
	const { category } = useParams();

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	// FILTER LOGIC (same as healthcare)
	const filtered = wellnessProviders.filter((p) => {
		const matchCategory = p.category.toLowerCase() === category.toLowerCase();

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
			: wellnessProviders.filter((p) => p.category === category);

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
						{category.toUpperCase()} Services
					</h1>

					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						Relax, Refresh & Rejuvenate Near You
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

				{/* CARDS */}
				<div className="row g-4">
					{finalData.map((p) => (
						<div className="col-md-4" key={p.id}>
							<div
								style={{
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									borderRadius: "15px",
									border: "1px solid white",
									padding: "20px",
									boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
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
								<h4 className="fw-bold">{p.name}</h4>

								<p className="fw-bold">{p.address}</p>

								<p className="fw-bold">⭐ {p.rating}</p>
								<p className="fw-bold ">⏱ {p.distance} away</p>
								<p
									style={{
										fontWeight: "normal",
										color: "#fff",
									}}>
									📍 {p.address}
								</p>

								<div className="d-flex gap-2 mt-3">
									<button
										className="btn btn-dark w-50"
										onClick={() => {
											const user = localStorage.getItem("user");

											if (!user) {
												navigate("/login", {
													state: { redirectTo: `/book/${p.category}/${p.id}` },
												});
											} else {
												navigate(`/book/${p.category}/${p.id}`);
											}
										}}>
										Book Now
									</button>

									<Link
										to={`https://www.google.com/maps/search/?api=1&query=${p.name}+${p.address}`}
										target="_blank"
										rel="noreferrer"
										className="btn w-50 fw-bold"
										style={{
											backgroundColor: "#ffffff",
											border: "1px solid #0a66c2",
											color: "#0a66c2",
											fontFamily: "Times New Roman",
											borderRadius: "8px",
											textAlign: "center",
											transition: "0.3s",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = "#0a66c2";
											e.currentTarget.style.color = "#ffffff";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = "#0a66c2";
											e.currentTarget.style.color = "#ffffff";
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

export default WellnessCategory;
