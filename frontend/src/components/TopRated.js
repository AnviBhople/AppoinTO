import React from "react";

function TopRated() {
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

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "15px",
		padding: "20px",
		transition: "0.3s",
		border: "1px solid white",
		color: "white",
		boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
	};

	return (
		<div className="container my-5 text-center">
			<br />
			<br />
			<h2
				className="fw-bold display-6"
				style={{ fontFamily: "Times New Roman" }}>
				Top User Feedback
			</h2>

			<h4
				className="mt-3 fw-bold"
				style={{
					color: "#023e8a",
					fontFamily: "Times New Roman",
					textAlign: "center",
				}}>
				Read genuine feedback from people who have used our platform to find
				trusted healthcare, wellness, and counseling services. Their experiences
				help others make confident and informed decisions.{" "}
			</h4>

			<div className="row mt-5">
				{users.map((user, index) => (
					<div className="col-md-4" key={index}>
						<div
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.05)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<h5
								style={{
									fontSize: "30px",
									fontWeight: "bold",
									fontFamily: "Times New Roman",
								}}>
								{user.name}
							</h5>

							<p
								className="mt-3 fw-bold"
								style={{
									fontFamily: "Times New Roman",
									fontSize: "20px",
									fontWeight: "normal",
								}}>
								“{user.feedback}”
							</p>

							<p
								className="fw-bold mt-3"
								style={{
									fontFamily: "Times New Roman",
									fontWeight: "bold",
									fontSize: "28px",
								}}>
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
