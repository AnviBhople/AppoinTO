import React, { useState } from "react";
import nlp from "compromise";
import { useNavigate } from "react-router-dom";

function AIAssessment() {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const analyzeSymptoms = () => {
		if (!text) return alert("Please describe your symptoms first.");
		setLoading(true);

		setTimeout(() => {
			const doc = nlp(text.toLowerCase());

			if (doc.has("(tooth|teeth|gum|dentist|ache|mouth|filling|cavity)")) {
				alert("AI Analysis: Dental concern identified.");
				navigate("/healthcare/dentist");
			} else if (
				doc.has("(bone|joint|fracture|back pain|knee|spine|orthopedic)")
			) {
				alert("AI Analysis: Orthopedic/Bone health detected.");
				navigate("/healthcare/orthopedic");
			} else if (doc.has("(eye|vision|sight|glasses|blurry|optician)")) {
				alert("AI Analysis: Vision/Ophthalmology intent detected.");
				navigate("/healthcare/eye");
			} else if (doc.has("(skin|rash|acne|dermatologist|itching|derma)")) {
				alert("AI Analysis: Dermatological concern detected.");
				navigate("/healthcare/derma");
			} else if (
				doc.has("(sad|anxious|stress|depressed|therapy|psychologist)")
			) {
				alert("AI Analysis: Mental health intent detected.");
				navigate("/counseling/psychologist");
			} else if (doc.has("(tired|yoga|massage|fitness|relax|spa)")) {
				alert("AI Analysis: Wellness and Physical relaxation detected.");
				navigate("/wellness/spa");
			} else {
				alert("AI Analysis: General health inquiry detected.");
				navigate("/healthcare/general");
			}

			setLoading(false);
		}, 1500);
	};
	const containerStyle = {
		minHeight: "100vh",
		backgroundColor: "#f5f3f4",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "20px",
		fontFamily: "Times New Roman",
	};

	const cardStyle = {
		maxWidth: "600px",
		width: "100%",
		backgroundColor: "white",
		borderRadius: "20px",
		boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
		overflow: "hidden",
	};

	return (
		<div style={containerStyle}>
			<div style={cardStyle}>
				<div
					style={{
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						padding: "30px",
						color: "white",
						textAlign: "center",
					}}>
					<h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
						Smart AI Assessment
					</h2>
					<p style={{ opacity: "0.9" }}>
						Describe your concern in plain English
					</p>
				</div>

				<div style={{ padding: "40px" }}>
					<label
						style={{
							fontWeight: "bold",
							display: "block",
							marginBottom: "10px",
							fontSize: "18px",
						}}>
						What's on your mind?
					</label>
					<textarea
						style={{
							width: "100%",
							height: "150px",
							padding: "15px",
							borderRadius: "12px",
							border: "2px solid #e3f2fd",
							fontSize: "16px",
							outline: "none",
							resize: "none",
						}}
						placeholder="Example: I need a dentist in Mumbai or I'm feeling very stressed lately..."
						onChange={(e) => setText(e.target.value)}
					/>

					<button
						onClick={analyzeSymptoms}
						disabled={loading}
						style={{
							width: "100%",
							marginTop: "25px",
							padding: "15px",
							borderRadius: "12px",
							backgroundColor: "#023e8a",
							color: "white",
							border: "none",
							fontWeight: "bold",
							fontSize: "18px",
							cursor: "pointer",
							transition: "0.3s",
						}}>
						{loading ? "AI Analysis in Progress..." : "Analyze the Needs"}
					</button>

					<p
						style={{
							marginTop: "20px",
							fontSize: "12px",
							color: "#666",
							textAlign: "center",
						}}>
						Note: This AI tool provides a preliminary assessment based on NLP
						patterns to help guide your appointment selection.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AIAssessment;
