import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./images/Logo.png";

function Navbar() {
	const navigate = useNavigate();
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const navStyle = {
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		fontFamily: "Arial",
		backdropFilter: "blur(10px)",
		fontSize: "x-large",
	};

	const linkStyle = { fontSize: "18px", color: "#fff", transition: "0.3s" };

	const btnStyle = {
		borderRadius: "10px",
		border: "2px solid #0077b6",
		background: "#fff",
		color: "#023e8a",
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
						width="150px"
						height="100"
						className="me-2"
						style={{ borderRadius: "10px", objectFit: "cover" }}
					/>
				</Link>

				<button
					className="navbar-toggler bg-light"
					type="button"
					onClick={() => setIsNavExpanded(!isNavExpanded)}>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`}
					id="navbarContent">
					<ul className="navbar-nav ms-auto align-items-center">
						{[
							{ name: "Home", path: "/" },
							{ name: "Healthcare", path: "/healthcare" },
							{ name: "Wellness", path: "/wellness" },
							{ name: "Counseling", path: "/counseling" },
							{ name: "About", path: "/about-us" },
							{ name: "Contact", path: "/contact-us" },
							{ name: "Dashboard", path: "/dashboard" },
						].map((item, index) => (
							<li className="nav-item mx-2" key={index}>
								<Link
									to={item.path}
									className="nav-link fw-bold"
									style={linkStyle}
									onClick={() => setIsNavExpanded(false)}
									onMouseEnter={(e) =>
										(e.currentTarget.style.color = "#90e0ef")
									}
									onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>

					<div className="ms-lg-3 mt-3 mt-lg-0 text-center">
						<button
							style={btnStyle}
							onClick={() => {
								navigate("/account");
								setIsNavExpanded(false);
							}}
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
