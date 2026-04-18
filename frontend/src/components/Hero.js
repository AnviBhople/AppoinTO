import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();

	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("healthcare");

	const handleSearch = () => {
		if (category === "healthcare") {
			navigate(`/healthcare/general?location=${location}`);
		} else if (category === "wellness") {
			navigate(`/wellness?location=${location}`);
		} else if (category === "counseling") {
			navigate(`/counseling?location=${location}`);
		}
	};

	const inputStyle = {
		height: "60px",
		width: "250px",
		fontSize: "larger",
		boxShadow: "0 20px 25px rgba(0,0,0,0.7)",
		border: "2px solid brown",
	};

	return (
		<div
			className="text-center py-5"
			style={{
				// backgroundColor: "#caf0f8",
				backgroundColor: "#f5f3f4",
				fontFamily: "Times New Roman",
			}}>
			<h1 className="fw-bold display-4">
				Find and Book Trusted Healthcare <br />
				<span style={{ color: "#023e8a" }}>NEAR YOU</span>
			</h1>

			<h3 className="mt-3 fw-bold" style={{ color: "#03045e" }}>
				Doctors, Therapists, Wellness Experts - all in one place.
			</h3>
			<br />
			<div className="d-flex justify-content-center mt-4 gap-3 flex-wrap">
				<input
					className="form-control shadow"
					style={inputStyle}
					placeholder="Enter Location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>

				<select
					className="form-select shadow"
					style={inputStyle}
					onChange={(e) => setCategory(e.target.value)}>
					<option value="healthcare">Healthcare</option>
					<option value="wellness">Wellness</option>
					<option value="counseling">Counseling</option>
				</select>

				<button
					onClick={handleSearch}
					className="fw-bold"
					style={{
						height: "60px",
						width: "150px",
						borderRadius: "12px",
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						color: "#fff",
						border: "none",
						fontSize: "20px",
					}}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Hero;
