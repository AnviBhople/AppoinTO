import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Account() {
	const navigate = useNavigate();
	const location = useLocation();

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [form, setForm] = useState({
		username: "",
		password: "",
		name: "",
		age: "",
		dob: "",
		email: "",
		phone: "",
		bloodGroup: "",
		medicalHistory: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const existingUsers = JSON.parse(localStorage.getItem("usersArray")) || [];
		existingUsers.push(form);
		localStorage.setItem("usersArray", JSON.stringify(existingUsers));
		localStorage.setItem("user", JSON.stringify(form));
		localStorage.setItem("loggedIn", "true");

		alert("Account created successfully!");
		const redirectPath = location.state?.redirectTo;
		if (redirectPath) {
			navigate(redirectPath, { state: location.state });
		} else {
			navigate("/dashboard");
		}
	};

	const pageStyle = {
		minHeight: "100vh",
		backgroundColor: "#f5f3f4",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Times New Roman",
		padding: isMobile ? "10px" : "40px",
	};

	const cardStyle = {
		width: "100%",
		maxWidth: "600px",
		padding: isMobile ? "20px" : "30px",
		borderRadius: "20px",
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		marginTop: "20px",
		marginBottom: "20px",
		backdropFilter: "blur(12px)",
		boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
		border: "1px solid white",
	};

	const inputStyle = {
		width: "100%",
		padding: "12px",
		margin: "6px 0",
		borderRadius: "10px",
		border: "none",
		outline: "none",
		backgroundColor: "#e3f2fd",
		color: "#000",
		fontWeight: "bold",
		fontSize: "16px",
	};

	const sectionTitle = {
		fontWeight: "bold",
		marginTop: "15px",
		marginBottom: "8px",
		fontSize: isMobile ? "18px" : "20px",
		color: "white",
		borderBottom: "1px solid rgba(255,255,255,0.2)",
		paddingBottom: "5px",
	};

	const buttonStyle = {
		width: isMobile ? "100%" : "300px",
		padding: "14px",
		marginTop: "20px",
		backgroundColor: "#db4b4b",
		border: "2px solid white",
		borderRadius: "12px",
		fontWeight: "bold",
		fontSize: "22px",
		color: "white",
		cursor: "pointer",
		transition: "0.3s",
		display: "block",
		margin: "10px auto",
	};

	return (
		<div style={pageStyle}>
			<div style={cardStyle}>
				<h2
					style={{
						textAlign: "center",
						marginBottom: "15px",
						fontWeight: "bold",
						fontSize: isMobile ? "30px" : "40px",
						color: "white",
					}}>
					Create Account
				</h2>
				<br />
				<form onSubmit={handleSubmit}>
					<div style={sectionTitle}>Login Details</div>
					<input
						name="username"
						placeholder="Enter Username"
						onChange={handleChange}
						style={inputStyle}
						required
					/>
					<input
						name="password"
						type="password"
						placeholder="Enter Password"
						onChange={handleChange}
						style={inputStyle}
						required
					/>

					<div style={sectionTitle}>Personal Information</div>
					<input
						name="name"
						placeholder="Enter Full Name"
						onChange={handleChange}
						style={inputStyle}
					/>
					<div className="d-flex gap-2">
						<input
							name="age"
							type="number"
							placeholder="Age"
							onChange={handleChange}
							style={inputStyle}
						/>
						<input
							name="dob"
							type="date"
							onChange={handleChange}
							style={inputStyle}
						/>
					</div>
					<input
						name="email"
						type="email"
						placeholder="Enter Email Address"
						onChange={handleChange}
						style={inputStyle}
					/>
					<input
						name="phone"
						type="tel"
						placeholder="Enter Contact Number"
						onChange={handleChange}
						style={inputStyle}
					/>

					<div style={sectionTitle}>Medical Information</div>
					<input
						name="bloodGroup"
						placeholder="Enter Blood Group (e.g. O+, A-)"
						onChange={handleChange}
						style={inputStyle}
					/>
					<textarea
						name="medicalHistory"
						placeholder="Enter Medical History (BP, Diabetes, etc.)"
						onChange={handleChange}
						style={{ ...inputStyle, height: "80px", resize: "none" }}
					/>

					<button
						type="submit"
						style={buttonStyle}
						onMouseEnter={(e) =>
							(e.currentTarget.style.backgroundColor = "#db4b4b")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.backgroundColor = "#ef233c")
						}>
						Create Account
					</button>
				</form>

				<p style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}>
					Already have an account? &ensp;
					<span
						style={{
							color: "#ffda1f", // Changed to yellow for better visibility
							fontWeight: "bold",
							cursor: "pointer",
							fontSize: isMobile ? "18px" : "22px",
						}}
						onClick={() => navigate("/login")}>
						Login here
					</span>
				</p>
			</div>
		</div>
	);
}

export default Account;
