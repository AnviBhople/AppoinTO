import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
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
		padding: "20px",
	};

	const card = {
		padding: isMobile ? "20px" : "40px",
		height: "auto",
		minHeight: "450px",
		borderRadius: "15px",
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		width: "100%",
		maxWidth: "400px",
		backdropFilter: "blur(12px)",
		boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
		border: "1px solid white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};

	const inputStyle = {
		width: "100%",
		padding: "14px",
		margin: "8px 0",
		borderRadius: "10px",
		border: "none",
		outline: "none",
		backgroundColor: "#e3f2fd",
		color: "#000",
		fontWeight: "bold",
		fontSize: "17px",
	};

	const buttonStyle = {
		width: isMobile ? "100%" : "220px",
		padding: "14px",
		marginTop: "20px",
		backgroundColor: "#db4b4b",
		border: "2px solid white",
		borderRadius: "12px",
		fontWeight: "bold",
		fontSize: "22px",
		color: "#fff",
		cursor: "pointer",
		transition: "0.3s",
		alignSelf: "center",
	};

	return (
		<div style={style}>
			<div style={card}>
				<h2
					className="text-center mb-4"
					style={{
						fontWeight: "bold",
						color: "white",
						fontSize: isMobile ? "1.8rem" : "2.2rem",
					}}>
					Login to your account <br /> with AppoinTO
				</h2>

				<form onSubmit={handleLogin} className="d-flex flex-column">
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

					<button
						type="submit"
						style={buttonStyle}
						onMouseEnter={(e) =>
							(e.currentTarget.style.backgroundColor = "#db4b4b")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.backgroundColor = "#ef233c")
						}>
						Login
					</button>
				</form>

				<p style={{ color: "white", textAlign: "center", marginTop: "25px" }}>
					Don't have an account?{" "}
					<span
						style={{ color: "yellow", cursor: "pointer", fontWeight: "bold" }}
						onClick={() => navigate("/account", { state: location.state })}>
						Create one
					</span>
				</p>
			</div>
		</div>
	);
}

export default Login;
