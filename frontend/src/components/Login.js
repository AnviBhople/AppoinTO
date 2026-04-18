import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const location = useLocation();

	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleLogin = (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));

		if (!user) {
			alert("No account found. Please create one.");
			navigate("/account");
			return;
		}

		if (form.username === user.username && form.password === user.password) {
			localStorage.setItem("loggedIn", "true");
			alert("Login successful!");

			const redirectPath = location.state?.redirectTo || "/";
			navigate(redirectPath);
		} else {
			alert("Invalid credentials");
		}
	};

	const style = {
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f3f4",
		fontFamily: "Times New Roman",
	};

	const card = {
		padding: "30px",
		height: "500px",
		borderRadius: "15px",
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		width: "400px",
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
		fontSize: "17px",
	};

	const buttonStyle = {
		width: "200px",
		padding: "12px",
		marginTop: "10px",
		// background: "linear-gradient(135deg, #0077b6, #023e8a)",
		backgroundColor: "#fff",
		border: "none",
		borderRadius: "12px",
		fontWeight: "bold",
		fontSize: "18px",
		color: "#023e8a",
		cursor: "pointer",
		transition: "0.3s",
		alignItems: "center",
		marginLeft: "60px",
	};

	return (
		<div style={style}>
			<div style={card}>
				<br />
				<br />
				<h2
					className="text-center"
					style={{ fontWeight: "bold", color: "white", fontSize: "xx-large" }}>
					Login to your account
					<br /> with AppoinTO
				</h2>
				<br />
				<br />
				<form onSubmit={handleLogin}>
					<input
						name="username"
						placeholder="Enter Username"
						onChange={handleChange}
						style={inputStyle}
					/>
					<br />
					<br />
					<input
						name="password"
						type="password"
						placeholder="Enter Password"
						onChange={handleChange}
						style={inputStyle}
					/>
					<br />
					<br />
					<br />

					<button style={buttonStyle}>Login</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
