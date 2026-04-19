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

		const users = JSON.parse(localStorage.getItem("usersArray")) || [];

		const foundUser = users.find(
			(u) => u.username === form.username && u.password === form.password,
		);

		if (foundUser) {
			localStorage.setItem("user", JSON.stringify(foundUser));
			localStorage.setItem("loggedIn", "true");
			alert("Login successful!");

			const redirectPath = location.state?.redirectTo;
			if (redirectPath) {
				navigate(redirectPath, { state: location.state });
			} else {
				navigate("/dashboard");
			}
		} else {
			alert("Invalid credentials or Account does not exist!");
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
				<p style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
					Don't have an account?{" "}
					<span
						style={{ color: "yellow", cursor: "pointer" }}
						onClick={() => navigate("/account", { state: location.state })}>
						Create one
					</span>
				</p>
			</div>
		</div>
	);
}

export default Login;
