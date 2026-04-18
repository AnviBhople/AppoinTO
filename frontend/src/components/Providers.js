import React from "react";
import { useNavigate } from "react-router-dom";
import { providers as healthcareProviders } from "../data/healthcareProviders";
import { wellnessProviders } from "../data/wellnessProviders";
import { counselingProviders } from "../data/counselingProviders";

function Providers() {
	const navigate = useNavigate();
	const providers = [
		healthcareProviders[0],
		wellnessProviders[0],
		counselingProviders[0],
	].filter(Boolean);

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
			<br />
			<br />
			<h2
				className="fw-bold display-6"
				style={{ fontFamily: "Times New Roman" }}>
				Nearby Providers
			</h2>

			<h4
				className="mt-2 fw-bold"
				style={{
					color: "#023e8a",
					fontFamily: "Times New Roman",
					textAlign: "center",
				}}>
				Connect with highly trusted and verified professionals near your
				location, ensuring easy access to quality healthcare, wellness, and
				counseling services when you need them most.{" "}
			</h4>
			<br />

			<div className="row mt-4">
				{providers.map((p, index) => (
					<div className="col-md-4" key={index}>
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
								⭐ {p.rating} | {p.distance}
							</p>

							<button
								className="fw-bold mt-2"
								style={{
									backgroundColor: "#ffffff",
									border: "2px solid #fff",
									color: "#0a66c2",
									fontFamily: "Times New Roman",
									borderRadius: "8px",
									textAlign: "center",
									height: "50px",
									width: "200px",
									marginLeft: "10px",
									fontSize: "x-large",
									transition: "0.3s",
								}}
								onClick={() => navigate(`/book/${p.category}/${p.id}`)}>
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
