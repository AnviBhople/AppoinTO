import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("healthcare");

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const handleSearch = () => {
		if (category === "healthcare") {
			navigate(`/healthcare/general?location=${location}`);
		} else if (category === "wellness") {
			navigate(`/wellness/all?location=${location}`);
		} else if (category === "counseling") {
			navigate(`/counseling/all?location=${location}`);
		}
	};

	const animationStyles = `
  @keyframes healthcareWave {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
    50% { transform: translateY(-20px) rotate(5deg); opacity: 0.8; }
    100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
  }
  @keyframes rotateGlow {
    0% { transform: rotate(0deg); box-shadow: 0 0 15px rgba(2, 62, 138, 0.4); }
    50% { transform: rotate(180deg); box-shadow: 0 0 30px rgba(0, 119, 182, 0.6); }
    100% { transform: rotate(360deg); box-shadow: 0 0 15px rgba(2, 62, 138, 0.4); }
  }
  @keyframes pulseIcon {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
  }
`;

	const inputStyle = {
		height: "60px",
		width: isMobile ? "280px" : "250px",
		fontSize: "larger",
		boxShadow: "0 20px 25px rgba(0,0,0,0.7)",
		border: "2px solid #023e8a",
		borderRadius: "12px",
	};

	return (
		<>
			<style>{animationStyles}</style>

			<div
				style={{
					position: "relative",
					minHeight: "85vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#f5f3f4",
					fontFamily: "Times New Roman",
					overflow: "hidden",
					padding: "40px 0",
				}}>
				<div
					style={{
						position: "absolute",
						left: isMobile ? "2%" : "5%",
						top: isMobile ? "20%" : "25%",
						opacity: 0.2,
						animation: "healthcareWave 7s ease-in-out infinite",
						userSelect: "none",
						zIndex: 1,
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}>
					<span
						className="material-symbols-outlined"
						style={{ fontSize: isMobile ? "60px" : "100px", color: "#023e8a" }}>
						medical_services
					</span>
					<span
						className="material-symbols-outlined"
						style={{
							fontSize: isMobile ? "45px" : "70px",
							color: "#ef233c",
							marginLeft: isMobile ? "20px" : "40px",
						}}>
						favorite
					</span>
				</div>

				<div
					style={{
						position: "absolute",
						right: isMobile ? "-2%" : "5%",
						top: isMobile ? "22%" : "40%",
						width: isMobile ? "85px" : "150px",
						height: isMobile ? "85px" : "150px",
						borderRadius: "50%",
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						animation: "rotateGlow 12s linear infinite",
						border: isMobile ? "2px solid white" : "4px solid white",
						zIndex: 1,
						boxShadow: "0 0 20px rgba(2, 62, 138, 0.5)",
					}}>
					<span
						className="material-symbols-outlined"
						style={{
							fontSize: isMobile ? "40px" : "80px",
							color: "white",
							animation: "pulseIcon 3s infinite",
						}}>
						verified_user
					</span>
				</div>
				<div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
					<h1
						className="fw-bold"
						style={{ fontSize: isMobile ? "1.8rem" : "3.5rem" }}>
						Find and Book Trusted Healthcare <br />
						<span style={{ color: "#023e8a" }}>NEAR YOU</span>
					</h1>

					<h3
						className="mt-3 fw-bold"
						style={{
							color: "#03045e",
							fontSize: isMobile ? "1rem" : "1.75rem",
							maxWidth: isMobile ? "250px" : "none",
							margin: "0 auto",
						}}>
						Doctors, Therapists, Wellness Experts - all in one place.
					</h3>

					<div className="d-flex justify-content-center mt-5 gap-3 flex-wrap">
						<input
							list="city-options"
							className="form-control shadow"
							style={inputStyle}
							placeholder="Enter Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
						<datalist id="city-options">
							<option value="Delhi" />
							<option value="Mumbai" />
							<option value="Pune" />
							<option value="Amravati" />
							<option value="Nagpur" />
						</datalist>
						<select
							className="form-select shadow"
							style={inputStyle}
							value={category}
							onChange={(e) => setCategory(e.target.value)}>
							<option value="healthcare">Healthcare</option>
							<option value="wellness">Wellness</option>
							<option value="counseling">Counseling</option>
						</select>

						<button
							onClick={handleSearch}
							className="fw-bold"
							style={{
								height: "65px",
								width: "170px",
								borderRadius: "30px",
								background: "linear-gradient(135deg, #023e8a, #0077b6)",
								color: "#fff",
								border: "2px solid #98c1d9",
								fontSize: "22px",
							}}>
							Search
						</button>
					</div>

					<div className="mt-5 d-flex justify-content-center">
						<button
							onClick={() => navigate("/ai-assessment")}
							style={{
								padding: "12px 25px",
								borderRadius: "30px",
								backgroundColor: "#ef233c",
								color: "white",
								fontWeight: "bold",
								border: "2px solid #f9844a",
								width: isMobile ? "240px" : "300px",
								fontSize: isMobile ? "large" : "x-large",
								height: isMobile ? "80px" : "100px",
								boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
							}}>
							Start AI Assessment
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
