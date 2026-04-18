import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { providers as healthcareProviders } from "../data/healthcareProviders";
import { wellnessProviders } from "../data/wellnessProviders";
import { counselingProviders } from "../data/counselingProviders";

function Booking() {
	const { category, id } = useParams();
	const navigate = useNavigate();

	const [provider, setProvider] = useState(null);

	useEffect(() => {
		const allProviders = [
			...healthcareProviders,
			...wellnessProviders,
			...counselingProviders,
		];

		const foundProvider = allProviders.find(
			(p) =>
				p.id === Number(id) &&
				p.category.toLowerCase() === category.toLowerCase(),
		);

		setProvider(foundProvider || null);
	}, [id, category]);

	const mapUrl = provider
		? `https://www.google.com/maps/search/?api=1&query=${provider.name}+${provider.address}`
		: "#";

	const handleBooking = () => {
		const user = JSON.parse(localStorage.getItem("user"));

		if (!user) {
			navigate("/account");
			return;
		}

		const newBooking = {
			id: Date.now(),
			userEmail: user.email,
			providerName: provider.name,
			category: provider.category,
			address: provider.address,
			time: new Date().toLocaleString(),
		};

		const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

		existingBookings.push(newBooking);

		localStorage.setItem("bookings", JSON.stringify(existingBookings));

		alert("Booking Confirmed Successfully!");

		navigate("/account");
	};

	if (!provider) {
		return (
			<div className="text-center mt-5">
				<h3>Loading provider details...</h3>
			</div>
		);
	}

	const cardStyle = {
		background: "linear-gradient(135deg, #023e8a, #0077b6)",
		borderRadius: "20px",
		border: "2px solid white",
		padding: "50px 20px",
		textAlign: "left",
		height: "400px",
		width: "600px",
		cursor: "pointer",
		boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
		transition: "0.3s",
		color: "white",
	};

	const btnStyle = {
		backgroundColor: "#000",
		color: "#ffff",
		fontFamily: "Times New Roman",
		fontWeight: "bold",
		borderRadius: "8px",
		textAlign: "center",
		fontSize: "larger",
		height: "60px",
		width: "250px",
		border: "2px solid white",
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
					Confirm&nbsp;Your&nbsp;
					<span style={{ color: "#023e8a" }}>Booking</span>
				</h1>

				<h3 className="text-center fw-bold mb-4">
					Please review the provider details below and confirm your appointment
				</h3>

				<div className="d-flex justify-content-center align-items-center">
					<div className="card p-3" style={cardStyle}>
						<h1 className="fw-bold">{provider.name}</h1>

						<h3 className="fw-bold">Category: {provider.category}</h3>

						<p className="fw-bold">📍 {provider.address}</p>

						<p className="fw-bold">⭐ Rating: {provider.rating}</p>

						<div className="d-flex justify-content-center gap-3 mt-3">
							<button
								className="btn btn-dark"
								style={btnStyle}
								onClick={handleBooking}>
								Confirm Booking
							</button>

							<a
								href={mapUrl}
								target="_blank"
								rel="noreferrer"
								className="btn fw-bold"
								style={{
									backgroundColor: "#ffffff",
									border: "2px solid black",
									color: "#0a66c2",
									fontFamily: "Times New Roman",
									borderRadius: "8px",
									textAlign: "center",
									fontSize: "x-large",
									fontWeight: "bold",
									height: "60px",
									width: "250px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								View on Map
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Booking;
