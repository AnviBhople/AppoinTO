import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { counselingProviders } from "../data/counselingProviders";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CounselingCategory() {
	const { category } = useParams();
	const navigate = useNavigate();
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
				backgroundColor: "#f5f3f4",
				minHeight: "100vh",
				fontFamily: "Times New Roman",
			}}
			className="py-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="fw-bold display-5">
						{category.toUpperCase()} Counseling
					</h1>

					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						FIND TRUSTED COUNSELORS NEAR YOU
					</h3>

					{userLocation && (
						<p className="fw-bold text-primary">Location: {userLocation}</p>
					)}
				</div>

				<div className="row g-4">
					{finalData.map((p) => (
						<div className="col-md-4" key={p.id}>
							<div
								style={{
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									borderRadius: "10px",
									border: "2px solid white",
									color: "#fff",
									padding: "20px",
									boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
									transition: "0.3s",
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

								<div className="d-flex gap-2 mt-3">
									<button
										className="btn btn-dark w-50"
										onClick={() => {
											const user = localStorage.getItem("user");

											if (!user) {
												alert("Please login first");
												navigate("/account");
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

export default CounselingCategory;
