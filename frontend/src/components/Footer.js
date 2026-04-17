import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	const footerStyle = {
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		color: "#fff",
		fontFamily: "Times New Roman",
	};

	const headingStyle = {
		fontWeight: "bold",
		fontSize: "18px",
		marginBottom: "5px",
	};

	const iconStyle = {
		fontSize: "26px",
		color: "#fff",
		transition: "0.3s",
	};

	return (
		<footer className="mt-5 pt-5 pb-3" style={footerStyle}>
			<div className="container text-center">
				<div className="mb-4">
					<h3 style={headingStyle}>Contact Us</h3>
					<h4>appointo@email.com | +91 1234567890</h4>
				</div>

				<div className="mb-4">
					<p style={headingStyle}>Follow Us</p>

					<div className="d-flex justify-content-center gap-4 mt-2">
						<Link
							to="/facebook"
							style={iconStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.2)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<i className="fa-brands fa-facebook"></i>
						</Link>

						<Link
							to="/twitter"
							style={iconStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.2)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<i className="fa-brands fa-x-twitter"></i>
						</Link>

						<Link
							to="/instagram"
							style={iconStyle}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.2)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}>
							<i className="fa-brands fa-instagram"></i>
						</Link>
					</div>
				</div>

				{/* Divider */}
				<hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

				<p className="mt-3 fw-bold">© 2026 AppoinTO</p>
			</div>
		</footer>
	);
}

export default Footer;
