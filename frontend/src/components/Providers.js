import React from "react";

function Providers() {
	const providers = [
		{
			name: "City Hospital",
			category: "Healthcare",
			rating: "4.5",
			distance: "2 km",
		},
		{
			name: "Goodwill Yoga Center",
			category: "Wellness",
			rating: "4.7",
			distance: "1 km",
		},
		{
			name: "JT Therapist",
			category: "Counseling",
			rating: "4.8",
			distance: "3 km",
		},
	];

	const cardStyle = {
		background: "linear-gradient(135deg, #80ced7, #48cae4)",
		borderRadius: "15px",
		transition: "0.3s",
		fontFamily: "Times New Roman",
		boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
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
				style={{ color: "#023e8a", fontFamily: "Times New Roman" }}>
				Discover trusted professionals near your location
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

							<p className="fw-bold">{p.category}</p>

							<p className="fw-bold">
								⭐ {p.rating} | {p.distance}
							</p>

							<button
								className="fw-bold mt-2"
								style={{
									height: "50px",
									borderRadius: "10px",
									background: "linear-gradient(135deg, #023e8a, #0077b6)",
									color: "#fff",
									border: "none",
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
