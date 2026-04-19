import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../api";

function Booking() {
	const { category, id } = useParams();
	const navigate = useNavigate();

	const [provider, setProvider] = useState(null);
	const [selectedSlot, setSelectedSlot] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProvider = async () => {
			if (!id || id === "undefined") {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				const response = await API.get(`/providers/healthcare`);
				setProvider(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Booking fetch error:", error);
				setLoading(false);
			}
		};
		fetchProvider();
	}, [id]);

	const handleBooking = () => {
		if (!selectedSlot) return alert("Please select a time slot");

		const storedUser = JSON.parse(localStorage.getItem("user"));

		if (!storedUser) {
			navigate("/login", { state: { redirectTo: `/book/${category}/${id}` } });
		} else {
			const newBooking = {
				id: Date.now(),
				providerName: provider.name,
				category: category,
				address: provider.address,
				slot: selectedSlot,
				userEmail: storedUser.email,
				date: new Date().toLocaleDateString(),
			};

			const existingBookings =
				JSON.parse(localStorage.getItem("bookings")) || [];

			const updatedBookings = [...existingBookings, newBooking];
			localStorage.setItem("bookings", JSON.stringify(updatedBookings));

			alert("Booking Confirmed Successfully!");
			navigate("/dashboard");
		}
	};

	if (loading)
		return (
			<div className="text-center mt-5">
				<h3>Loading...</h3>
			</div>
		);

	if (!provider)
		return (
			<div className="text-center mt-5">
				<h3 className="text-danger">Provider not found in database.</h3>
				<p>Check your MongoDB Compass: Does a document have id: {id}?</p>
				<button className="btn btn-primary" onClick={() => navigate(-1)}>
					Go Back
				</button>
			</div>
		);

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "20px",
		border: "2px solid white",
		padding: "50px 20px",
		textAlign: "left",
		width: "100%",
		maxWidth: "600px",
		boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
		color: "white",
	};

	return (
		<div
			style={{
				fontFamily: "Times New Roman",
				minHeight: "100vh",
				backgroundColor: "#f5f3f4",
			}}
			className="py-5">
			<div className="container">
				<h1 className="text-center fw-bold mb-4">
					Confirm <span style={{ color: "#023e8a" }}>Booking</span>
				</h1>
				<div className="d-flex justify-content-center">
					<div style={cardStyle}>
						<h2 className="fw-bold">{provider.name}</h2>
						<h4>Category: {provider.category}</h4>
						<p>📍 {provider.address}</p>
						<p>⭐ {provider.rating}</p>

						<div className="mt-4 text-center">
							<h4>Select Time Slot</h4>
							<div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
								{["Morning", "Afternoon", "Evening", "Night"].map((slot) => (
									<button
										key={slot}
										onClick={() => setSelectedSlot(slot)}
										style={{
											padding: "10px",
											borderRadius: "8px",
											border:
												selectedSlot === slot
													? "2px solid yellow"
													: "1px solid white",
											backgroundColor:
												selectedSlot === slot ? "#0077b6" : "#ffffff",
											color: selectedSlot === slot ? "white" : "black",
										}}>
										{slot}
									</button>
								))}
							</div>
						</div>
						<button
							className="btn btn-dark fw-bold w-100 mt-4 p-3"
							onClick={handleBooking}>
							Confirm Booking
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Booking;
