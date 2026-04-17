import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";

function Navbar() {
	const navStyle = {
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		fontFamily: "Times New Roman, serif",
		backdropFilter: "blur(10px)",
		fontSize: "x-large",
	};

	const linkStyle = {
		fontSize: "18px",
		color: "#fff",
		transition: "0.3s",
	};

	const btnStyle = {
		borderRadius: "10px",
		border: "2px solid #0077b6",
		background: "#fff",
		color: "#023e8a",
		// border: "none",
		padding: "8px 20px",
		fontSize: "22px",
		fontWeight: "bold",
		transition: "0.3s",
		height: "60px",
		width: "130px",
	};

	return (
		<nav className="navbar navbar-expand-lg shadow" style={navStyle}>
			<div className="container">
				<Link className="navbar-brand d-flex align-items-center" to="/">
					<img
						src={Logo}
						alt="Logo"
						width="150"
						height="100"
						className="me-2"
						style={{
							borderRadius: "10px",
							objectFit: "cover",
						}}
					/>
					<span
						style={{
							color: "#fff",
							fontWeight: "bold",
							fontSize: "22px",
						}}></span>
				</Link>

				<button
					className="navbar-toggler bg-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ms-auto align-items-center">
						{[
							{ name: "Home", path: "/" },
							{ name: "Healthcare", path: "/healthcare" },
							{ name: "Wellness", path: "/wellness" },
							{ name: "Counseling", path: "/counseling" },
							{ name: "About", path: "/about-us" },
							{ name: "Contact", path: "/contact-us" },
						].map((item, index) => (
							<li className="nav-item mx-2" key={index}>
								<Link
									to={item.path}
									className="nav-link fw-bold"
									style={linkStyle}
									onMouseEnter={(e) =>
										(e.currentTarget.style.color = "#90e0ef")
									}
									onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>

					<div className="ms-3">
						<button
							style={btnStyle}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "#90e0ef";
								e.currentTarget.style.color = "#000";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "#fff";
								e.currentTarget.style.color = "#023e8a";
							}}>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
