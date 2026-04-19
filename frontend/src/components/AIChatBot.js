import React, { useState } from "react";

function AIChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			text: "Hello! I am AppoinTO AI. How can I help you today?",
			sender: "ai",
		},
	]);
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (!input) return;
		const newMessages = [...messages, { text: input, sender: "user" }];
		setMessages(newMessages);
		setInput("");

		setTimeout(() => {
			let response =
				"I'm analyzing that. Would you like to book a consultation?";
			if (input.toLowerCase().includes("mumbai"))
				response = "We have 5 top-rated doctors in Mumbai. Want to see them?";
			if (input.toLowerCase().includes("fee"))
				response =
					"Consultation fees start at ₹500. Every booking includes a free follow-up!";

			setMessages([...newMessages, { text: response, sender: "ai" }]);
		}, 1000);
	};

	return (
		<div
			style={{
				position: "fixed",
				bottom: "20px",
				right: "20px",
				zIndex: 1000,
			}}>
			{!isOpen ? (
				<button
					onClick={() => setIsOpen(true)}
					style={{
						width: "100px",
						height: "90px",
						borderRadius: "50%",
						backgroundColor: "#023e8a",
						color: "white",
						border: "none",
						fontSize: "30px",
						boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
					}}>
					🤖
				</button>
			) : (
				<div
					style={{
						width: "300px",
						height: "400px",
						backgroundColor: "white",
						borderRadius: "15px",
						boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
						display: "flex",
						flexDirection: "column",
						border: "1px solid #023e8a",
					}}>
					<div
						style={{
							backgroundColor: "#023e8a",
							color: "white",
							padding: "10px",
							borderRadius: "15px 15px 0 0",
							display: "flex",
							justifyContent: "space-between",
						}}>
						<span className="fw-bold">AppoinTO AI</span>
						<button
							onClick={() => setIsOpen(false)}
							style={{ background: "none", border: "none", color: "white" }}>
							X
						</button>
					</div>
					<div
						style={{
							flex: 1,
							padding: "10px",
							overflowY: "auto",
							fontSize: "14px",
						}}>
						{messages.map((m, i) => (
							<div
								key={i}
								style={{
									textAlign: m.sender === "user" ? "right" : "left",
									margin: "5px 0",
								}}>
								<span
									style={{
										backgroundColor:
											m.sender === "user" ? "#caf0f8" : "#f1f1f1",
										padding: "8px",
										borderRadius: "10px",
										display: "inline-block",
									}}>
									{m.text}
								</span>
							</div>
						))}
					</div>
					<div className="p-2 border-top d-flex">
						<input
							className="form-control"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Ask AI..."
							onKeyPress={(e) => e.key === "Enter" && handleSend()}
						/>
						<button onClick={handleSend} className="btn btn-primary ms-1">
							{" "}
							{">"}{" "}
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default AIChatBot;
