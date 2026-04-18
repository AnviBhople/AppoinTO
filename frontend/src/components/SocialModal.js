import React from "react";

function SocialModal({ show, platform, onClose }) {
	if (!show) return null;

	const getContent = () => {
		switch (platform) {
			case "facebook":
				return {
					title: "AppoinTO on Facebook",
					text: "Follow us for health updates, wellness tips, doctor highlights, and appointment reminders.",
				};

			case "instagram":
				return {
					title: "AppoinTO on Instagram",
					text: "Explore wellness reels, success stories, patient journeys, and health awareness content.",
				};

			case "x":
				return {
					title: "AppoinTO on X (Twitter)",
					text: "Get real-time updates, healthcare alerts, and new provider announcements.",
				};

			default:
				return { title: "", text: "" };
		}
	};

	const content = getContent();

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0,0,0,0.6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 9999,
			}}
			onClick={onClose}>
			<div
				style={{
					background: "white",
					padding: "30px",
					borderRadius: "15px",
					width: "400px",
					textAlign: "center",
					fontFamily: "Times New Roman",
				}}
				onClick={(e) => e.stopPropagation()}>
				<h2 style={{ color: "#023e8a" }}>{content.title}</h2>

				<p style={{ marginTop: "15px", fontWeight: "bold" }}>{content.text}</p>

				<button className="btn btn-primary mt-3" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
}

export default SocialModal;
