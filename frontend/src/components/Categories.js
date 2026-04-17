import React from "react";

function Categories() {
	const sectionStyle = {
		backgroundColor: "#caf0f8",

		fontFamily: "Times New Roman",
		textAlign: "center",
	};

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

	const cardHead = {
		fontSize: "30px",
	};
	const card = {
		baclgroundColor: "#80ced7",
	};

	return (
		<div className="container my-5" style={sectionStyle}>
			<h2 style={headingStyle}>Categories We Cater To</h2>

			<p className="mt-3" style={textStyle}>
				Explore services tailored for your health and wellness needs
			</p>

			<div className="row mt-5">
				<div className="col-md-4">
					<div className="card p-4 shadow-sm h-100" style={card}>
						<img
							// src={healthcareImg}
							src="https://via.placeholder.com/150"
							alt="Healthcare"
							className="mb-3 mx-auto"
							style={{
								width: "120px",
								height: "120px",
								objectFit: "cover",
								borderRadius: "10px",
							}}
						/>
						<h5 className="fw-bold" style={cardHead}>
							Healthcare
						</h5>
						<p style={textStyle}>Doctors & Clinics</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card p-4 shadow-sm h-100">
						<img
							// src={wellnessImg}
							src="https://via.placeholder.com/150"
							alt="Wellness"
							className="mb-3 mx-auto"
							style={{
								width: "120px",
								height: "120px",
								objectFit: "cover",
								borderRadius: "10px",
							}}
						/>
						<h5 className="fw-bold" style={cardHead}>
							Wellness
						</h5>
						<p style={textStyle}>Yoga, Fitness, Spa</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card p-4 shadow-sm h-100">
						<img
							// src={counselingImg}
							src="https://via.placeholder.com/150"
							alt="Counseling"
							className="mb-3 mx-auto"
							style={{
								width: "120px",
								height: "120px",
								objectFit: "cover",
								borderRadius: "10px",
							}}
						/>
						<h5 className="fw-bold" style={cardHead}>
							Counseling
						</h5>
						<p style={textStyle}>Therapists</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
