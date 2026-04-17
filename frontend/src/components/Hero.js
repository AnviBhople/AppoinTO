// import React from "react";

// function Hero() {
// 	const styleMain = {
// 		backgroundColor: "#caf0f8",
// 	};
// 	const mainHead = {
// 		fontFamily: "Times New Roman",
// 		textAlign: "center",
// 	};
// 	const p = {
// 		fontSize: "20px",
// 		fontWeight: "bold",
// 		fontFamily: "Times New Roman",
// 	};
// 	return (
// 		<div className="text-center py-5 " style={styleMain}>
// 			<h1 className="fw-bold" style={mainHead}>
// 				Find and Book Trusted Healthcare <br />{" "}
// 				<h1 style={{ color: "#023e8a", fontWeight: "bold" }}>NEAR YOU</h1>
// 			</h1>

// 			<p className="mt-3" style={p}>
// 				Doctors, Therapists, Wellness Experts - all in one place.
// 			</p>

// 			<div className="d-flex justify-content-center mt-4">
// 				<input
// 					className="form-control w-25 me-2"
// 					placeholder="Enter Location"
// 				/>
// 				<br />
// 				<select className="form-select w-25 me-2">
// 					<option>Healthcare</option>
// 					<option>Wellness</option>
// 					<option>Counseling</option>
// 				</select>

// 				<button className="btn btn-primary">Search</button>
// 			</div>
// 		</div>
// 	);
// }

// export default Hero;
import React from "react";

function Hero() {
	const mainStyle = {
		backgroundColor: "#caf0f8",
		fontFamily: "Times New Roman",
	};

	const textStyle = {
		fontSize: "20px",
		fontWeight: "bold",
	};

	return (
		<div className="text-center py-5" style={mainStyle}>
			<br />
			<h1 className="fw-bold">
				Find and Book Trusted Healthcare <br />
				<span style={{ color: "#023e8a" }}>NEAR YOU</span>
			</h1>

			<p className="mt-3" style={textStyle}>
				Doctors, Therapists, Wellness Experts - all in one place.
			</p>
			<br />
			<div className="d-flex justify-content-center mt-3 flex-wrap gap-3">
				<input
					className="form-control"
					style={{ width: "200px", fontSize: "20px" }}
					placeholder="Enter Location"
				/>
				<br />
				<br />
				<select
					className="form-select"
					style={{ width: "200px", fontSize: "20px" }}
					placeholder="Select Category">
					<option>Healthcare</option>
					<option>Wellness</option>
					<option>Counseling</option>
				</select>

				<button
					className="btn btn-primary px-4 fw-bold"
					style={{
						height: "69px",
						width: "150px",
						borderRadius: "10px",
						fontSize: "25px",
						backgroundColor: "#023e8a",
						color: "#fff",
						border: "2px solid #0077a6",
						fontFamily: "Times New Roman, serif",
					}}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Hero;
