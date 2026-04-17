import React from "react";

function TopRated() {
	const sectionStyle = {
		fontFamily: "Times New Roman",
		textAlign: "center",
	};

	const users = [
		{
			name: "Aarav Sharma",
			feedback:
				"Excellent service! Booking appointments was quick and hassle-free.",
		},
		{
			name: "Priya Mehta",
			feedback:
				"Loved the seamless experience. Found the best therapist near me easily.",
		},
		{
			name: "Rohan Verma",
			feedback:
				"Very user-friendly platform. Highly recommended for healthcare needs.",
		},
	];
	const headingStyle = {
		color: "#000",
		fontWeight: "bold",
		fontSize: "36px",
	};

	const textStyle = {
		color: "#023e8a",
		fontSize: "18px",
		fontWeight: "normal",
	};
	const textstyle = {
		color: "#21295c",
		fontSize: "18px",
		fontWeight: "bold",
	};

	return (
		<div className="container my-5" style={sectionStyle}>
			<h2 className="fw-bold" style={headingStyle}>
				Top User Feedback
			</h2>

			<p className="mt-3 fw-bold" style={textStyle}>
				User reviews and testimonials
			</p>

			<div className="row mt-5">
				{users.map((user, index) => (
					<div className="col-md-4 gap-3" key={index}>
						<div
							className="card p-3 shadow-sm h-100"
							style={{
								borderRadius: "10px",
								backgroundColor: "#80ced7",
								color: "#21295c",
							}}>
							<h5
								className="fw"
								style={{ fontSize: "30px", fontWeight: "bolder" }}>
								{user.name}
							</h5>

							<p style={textstyle} className="mt-3">
								“{user.feedback}”
							</p>

							<p
								className="fw-bold mt-3"
								style={{ fontWeight: "bold", fontSize: "30px" }}>
								⭐ 5.0
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TopRated;
