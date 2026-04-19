import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Providers() {
	const navigate = useNavigate();
	const [displayProviders, setDisplayProviders] = useState([]);

	useEffect(() => {
		const fetchSamples = async () => {
			try {
				const hRes = await axios.get(
					"http://localhost:5000/api/providers/healthcare",
				);
				const wRes = await axios.get(
					"http://localhost:5000/api/providers/wellness",
				);
				const cRes = await axios.get(
					"http://localhost:5000/api/providers/counseling",
				);

				const samples = [hRes.data[0], wRes.data[0], cRes.data[0]].filter(
					Boolean,
				);
				setDisplayProviders(samples);
			} catch (err) {
				console.error("Error fetching sample providers:", err);
			}
		};
		fetchSamples();
	}, []);

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "15px",
		color: "white",
		border: "1px solid #fff",
		transition: "0.3s",
		fontFamily: "Times New Roman",
		boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
	};

	return (
		<div className="container my-5 text-center">
			<h2
				className="fw-bold display-6"
				style={{ fontFamily: "Times New Roman" }}>
				Nearby Providers
			</h2>
			<h4
				className="mt-2 fw-bold"
				style={{ color: "#023e8a", fontFamily: "Times New Roman" }}>
				Connect with highly trusted and verified professionals near your
				location.
			</h4>

			<div className="row mt-4">
				{displayProviders.map((p, index) => (
					<div className="col-md-4" key={p._id || index}>
						<div
							className="card p-4 h-100 text-start"
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<h5 className="fw-bold" style={{ fontSize: "28px" }}>
								{p.name}
							</h5>
							<p className="fw-bold text-capitalize">{p.category}</p>
							<p className="fw-bold">
								⭐ {p.rating} | {p.city || "Nearby"}
							</p>

							<button
								className="fw-bold mt-2"
								style={{
									backgroundColor: "#ffffff",
									border: "2px solid #fff",
									color: "#0a66c2",
									fontFamily: "Times New Roman",
									borderRadius: "8px",
									height: "50px",
									width: "200px",
									fontSize: "large",
								}}
								onClick={() => {
									const targetId = p.id || p._id;
									navigate(`/book/${p.category}/${targetId}`);
								}}>
								Book Now
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Providers;
