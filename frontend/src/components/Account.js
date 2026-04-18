import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Account() {
	const navigate = useNavigate();
	const location = useLocation();
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

		localStorage.setItem("user", JSON.stringify(form));
		localStorage.setItem("loggedIn", "true");

		alert("Account created successfully!");

		const redirectPath = location.state?.redirectTo || "/";
		navigate(redirectPath);
	};

	const pageStyle = {
		minHeight: "100vh",
		backgroundColor: "#f5f3f4",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Times New Roman",
		padding: "20px",
	};

	// 🧊 Glass Card
	const cardStyle = {
		width: "600px",
		padding: "30px",
		borderRadius: "20px",
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		marginTop: "10px",
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
		marginBottom: "5px",
		fontSize: "20px",
		color: "white",
	};

	const buttonStyle = {
		width: "300px",
		padding: "12px",
		marginTop: "10px",
		// background: "linear-gradient(135deg, #0077b6, #023e8a)",
		backgroundColor: "#fff",
		border: "none",
		borderRadius: "12px",
		fontWeight: "bold",
		fontSize: "20px",
		color: "#023e8a",
		cursor: "pointer",
		transition: "0.3s",
		alignItems: "center",
		marginLeft: "100px",
	};

	return (
		<div style={pageStyle}>
			<div style={cardStyle}>
				<h2
					style={{
						textAlign: "center",
						marginBottom: "15px",
						fontWeight: "bold",
						fontSize: "40px",
						color: "white",
					}}>
					Create Account
				</h2>
				<br />
				<br />
				<form onSubmit={handleSubmit}>
					{/* LOGIN INFO */}
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
					<br />
					<br />
					{/* PERSONAL INFO */}
					<div style={sectionTitle}> Personal Information</div>
					<input
						name="name"
						placeholder="Enter Full Name"
						onChange={handleChange}
						style={inputStyle}
					/>
					<input
						name="age"
						type="number"
						placeholder="Enter Age"
						onChange={handleChange}
						style={inputStyle}
					/>
					<input
						name="dob"
						type="date"
						onChange={handleChange}
						style={inputStyle}
					/>
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
					<br />
					<br />
					{/* MEDICAL INFO */}
					<div style={sectionTitle}> Medical Information</div>
					<input
						name="bloodGroup"
						placeholder="Enter Blood Group (e.g. O+, A-)"
						onChange={handleChange}
						style={inputStyle}
					/>
					<textarea
						name="medicalHistory"
						placeholder="Enter Medical History (BP, Diabetes, Heart issues, etc.)"
						onChange={handleChange}
						style={{
							...inputStyle,
							height: "90px",
							resize: "none",
						}}
					/>
					<br />
					<br />

					<button style={buttonStyle}>Create Account</button>
				</form>
				<br />
				<p style={{ textAlign: "center", marginTop: "12px", color: " #fff" }}>
					Already have an account? &ensp;
					<span
						style={{
							color: "red",
							fontWeight: "bold",
							cursor: "pointer",
							fontSize: "x-large",
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
