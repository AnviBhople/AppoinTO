import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-white shadow-sm">
			<div className="container">
				<a className="navbar-brand fw-bold" href="#">
					AppoinTO
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Healthcare
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								Wellness
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								Counseling
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>

					{/* Right side button */}
					<div className="d-flex ms-3">
						<button className="btn btn-primary">Login</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
