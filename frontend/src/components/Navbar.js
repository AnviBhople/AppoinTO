import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg shadow-sm"
			style={{
				backgroundColor: "#0096c7",
				fontFamily: "Times New Roman, serif",
				fontWeight: "bold",
			}}>
			<div className="container">
				<Link className="navbar-brand d-flex align-items-center" to="/">
					<img
						src={Logo}
						alt="Logo"
						width="150"
						height="100"
						className="me-3"
						style={{
							borderRadius: "10px",
							border: "2px solid #0077a6",
							objectFit: "cover",
						}}
					/>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
						<li className="nav-item mx-3">
							<Link
								className="nav-link text-white fw-bold"
								style={{ fontSize: "20px" }}
								to="/healthcare">
								Healthcare
							</Link>
						</li>

						<li className="nav-item mx-3">
							<Link
								className="nav-link text-white fw-bold"
								style={{ fontSize: "20px" }}
								to="/wellness">
								Wellness
							</Link>
						</li>

						<li className="nav-item mx-3">
							<Link
								className="nav-link text-white fw-bold"
								style={{ fontSize: "20px" }}
								to="/counselling">
								Counseling
							</Link>
						</li>

						<li className="nav-item mx-3">
							<Link
								className="nav-link text-white fw-bold"
								style={{ fontSize: "20px" }}
								to="/about-us">
								About
							</Link>
						</li>

						<li className="nav-item mx-3">
							<Link
								className="nav-link text-white fw-bold"
								style={{ fontSize: "20px" }}
								to="/contact-us">
								Contact
							</Link>
						</li>
					</ul>

					<div className="d-flex ms-4">
						<button
							className="btn btn-light px-4 py-2 fw-bold"
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
							Sign in
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
