import React, { useState } from "react";
import SocialModal from "./SocialModal";

function Footer() {
	const [modalOpen, setModalOpen] = useState(false);
	const [platform, setPlatform] = useState("");

	const footerStyle = {
		background: "linear-gradient(135deg, #0077b6, #023e8a)",
		color: "#fff",
		fontFamily: "Times New Roman",
	};

	const iconStyle = {
		fontSize: "26px",
		color: "#fff",
		cursor: "pointer",
		transition: "0.3s",
	};

	return (
		<footer className="mt-5 pt-5 pb-3" style={footerStyle}>
			<div className="container text-center">
				<h3>Contact Us</h3>
				<h4>
					appointo@email.com <span className="d-none d-md-inline">|</span>{" "}
					<br className="d-md-none" /> +91 1234567890
				</h4>

				<div className="d-flex justify-content-center gap-4 mt-3">
					<i
						className="fa-brands fa-facebook"
						style={iconStyle}
						onClick={() => {
							setPlatform("facebook");
							setModalOpen(true);
						}}
					/>
					<i
						className="fa-brands fa-x-twitter"
						style={iconStyle}
						onClick={() => {
							setPlatform("x");
							setModalOpen(true);
						}}
					/>
					<i
						className="fa-brands fa-instagram"
						style={iconStyle}
						onClick={() => {
							setPlatform("instagram");
							setModalOpen(true);
						}}
					/>
				</div>
				<hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />
				<p>© 2026 AppoinTO</p>
				<SocialModal
					show={modalOpen}
					platform={platform}
					onClose={() => setModalOpen(false)}
				/>
			</div>
		</footer>
	);
}

export default Footer;
