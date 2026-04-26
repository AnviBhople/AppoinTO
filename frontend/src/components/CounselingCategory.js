import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import API from "../api";

function CounselingCategory() {
	const { category } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const [providers, setProviders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	useEffect(() => {
		const fetchProviders = async () => {
			try {
				setLoading(true);
				const res = await API.get(`/providers/counseling`);
				setProviders(res.data);
				setLoading(false);
			} catch (err) {
				console.error("Fetch Error:", err);
				setError("Unable to connect to the counseling database.");
				setLoading(false);
			}
		};

		fetchProviders();
	}, []);

	const typeMatches = providers.filter((p) => {
		if (category.toLowerCase() === "all") return true;

		return p.type && p.type.toLowerCase() === category.toLowerCase();
	});

	const filteredByLocation = typeMatches.filter((p) => {
		if (!userLocation || userLocation.trim() === "") {
			return true;
		}
		const addressMatch =
			p.address && p.address.toLowerCase().includes(userLocation.toLowerCase());
		const cityMatch =
			p.city && p.city.toLowerCase().includes(userLocation.toLowerCase());
		return addressMatch || cityMatch;
	});

	const finalDisplayData =
		filteredByLocation.length > 0 ? filteredByLocation : typeMatches;

	if (loading)
		return (
			<div className="text-center mt-5">
				<h3>Finding Counselors...</h3>
			</div>
		);
	if (error)
		return (
			<div className="text-center mt-5 text-danger">
				<h3>{error}</h3>
			</div>
		);

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
						A Safe Space for Healing
					</h3>
				</div>

				<div className="row g-4">
					{finalDisplayData.length > 0 ? (
						finalDisplayData.map((p) => (
							<div className="col-md-4" key={p._id}>
								<div
									style={{
										background: "linear-gradient(135deg, #023e8a, #0077b6)",
										borderRadius: "15px",
										padding: "20px",
										color: "white",
										boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
									}}>
									<h4 className="fw-bold">{p.name}</h4>
									<p className="mb-1">📍 {p.address}</p>
									<p className="mb-1">⭐ {p.rating}</p>

									<button
										className="btn btn-dark w-100 mt-3 fw-bold"
										onClick={() => {
											const providerId = p.id || p._id;
											navigate(`/book/${p.category}/${providerId}`);
										}}>
										Book Appointment
									</button>
								</div>
							</div>
						))
					) : (
						<div className="text-center mt-5">
							<h3>No {category} experts found.</h3>
							<p className="text-muted">
								Tip: Ensure MongoDB documents have category: "counselling" and
								type: "{category}"
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CounselingCategory;
