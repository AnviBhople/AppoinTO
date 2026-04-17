import React from "react";

function Providers() {
	const headingStyle = {
		color: "#000",
		fontWeight: "bold",
		fontSize: "36px",
	};

	const textStyle = {
		color: "#023e8a",
		fontSize: "18px",
		fontWeight: "bold",
	};
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

	const sectionStyle = {
		fontFamily: "Times New Roman",
		textAlign: "center",
	};
	const btnStyle = {
		height: "50px",
		width: "250px",
		borderRadius: "10px",
		fontSize: "19px",
		backgroundColor: "#023e8a",
		color: "#fff",
		border: "2px solid #0077a6",

		fontFamily: "Times New Roman, serif",
	};
	return (
		<div className="container my-5" style={sectionStyle}>
			<h2 className="fw-bold" style={headingStyle}>
				Nearby Providers
			</h2>

			<p className="mt-2" style={textStyle}>
				Discover trusted professionals near your location
			</p>

			<div className="row mt-4">
				{providers.map((p, index) => (
					<div className="col-md-4" key={index}>
						<div
							className="card p-4 shadow-sm h-100"
							style={{ backgroundColor: "#80ced7", textAlign: "left" }}>
							<h5
								className="fw-bold"
								style={{ fontWeight: "bold", fontSize: "30px" }}>
								{p.name}
							</h5>
							<p style={{ fontWeight: "bold", fontSize: "20px" }}>
								{p.category}
							</p>
							<p style={{ fontWeight: "bold", fontSize: "19px" }}>
								⭐ {p.rating} | {p.distance}
							</p>
							<button className="btn btn-success fw-bold" style={btnStyle}>
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
