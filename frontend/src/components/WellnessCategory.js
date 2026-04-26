import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import API from "../api";

function WellnessCategory() {
	const { category } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const [providers, setProviders] = useState([]);
	const [loading, setLoading] = useState(true);

	const queryParams = new URLSearchParams(location.search);
	const userLocation = queryParams.get("location");

	useEffect(() => {
		const fetchProviders = async () => {
			try {
				const res = await API.get(`/providers/wellness`);
				setProviders(res.data);
				setLoading(false);
			} catch (err) {
				console.error("Fetch Error:", err);
				setLoading(false);
			}
		};

		fetchProviders();
	}, []);

	// const filteredData = providers.filter((p) => {
	// 	const matchesType =
	// 		p.type && p.type.toLowerCase() === category.toLowerCase();
	// 	if (!userLocation) return matchesType;
	// 	return (
	// 		matchesType &&
	// 		p.address.toLowerCase().includes(userLocation.toLowerCase())
	// 	);
	// });
	const filteredData = providers.filter((p) => {
		const matchesType =
			p.type && p.type.toLowerCase() === category.toLowerCase();

		if (!userLocation) return matchesType;

		// We check BOTH the address and the city field to be safe
		const searchLocation = userLocation.toLowerCase();
		const addressMatch =
			p.address && p.address.toLowerCase().includes(searchLocation);
		const cityMatch = p.city && p.city.toLowerCase().includes(searchLocation);

		return matchesType && (addressMatch || cityMatch);
	});

	if (loading)
		return (
			<div className="text-center mt-5">
				<h3>Loading Wellness...</h3>
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
						{category.toUpperCase()} Services
					</h1>
					<h3 className="fw-bold" style={{ color: "#023e8a" }}>
						Relax & Rejuvenate
					</h3>
				</div>

				<div className="row g-4">
					{filteredData.length > 0 ? (
						filteredData.map((p) => (
							<div className="col-md-4" key={p._id}>
								<div
									style={{
										background: "linear-gradient(135deg, #023e8a, #0077b6)",
										borderRadius: "15px",
										padding: "20px",
										color: "white",
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
										Book Now
									</button>
								</div>
							</div>
						))
					) : (
						<div className="text-center">
							<h3>No wellness services found.</h3>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default WellnessCategory;
