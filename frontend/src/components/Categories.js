import React from "react";

function Categories() {
	const sectionStyle = {
		fontFamily: "Times New Roman",
		textAlign: "center",
	};

	const cardStyle = {
		background: "linear-gradient(135deg, #80ced7, #48cae4)",
		borderRadius: "15px",
		transition: "0.3s",
		boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
	};

	return (
		<div className="container my-5" style={sectionStyle}>
			<br />
			<br />
			<h2 className="fw-bold display-6">Categories We Cater To</h2>

			<h4 className="mt-3 fw-bold" style={{ color: "#023e8a" }}>
				Explore services tailored for your health and wellness needs
			</h4>
			<br />
			<div className="row mt-5">
				{["Healthcare", "Wellness", "Counseling"].map((cat, i) => (
					<div className="col-md-4" key={i}>
						<div
							className="card p-4 h-100"
							style={cardStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "translateY(-10px)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "translateY(0)")
							}>
							<img
								src="https://via.placeholder.com/150"
								alt={cat}
								className="mb-3 mx-auto"
								style={{
									width: "120px",
									height: "120px",
									borderRadius: "12px",
								}}
							/>

							<h5 className="fw-bold" style={{ fontSize: "28px" }}>
								{cat}
							</h5>

							<p className="fw-bold">
								{cat === "Healthcare"
									? "Doctors & Clinics"
									: cat === "Wellness"
										? "Yoga, Fitness, Spa"
										: "Therapists"}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Categories;
