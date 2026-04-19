// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { providers as healthcareProviders } from "../data/healthcareProviders";
// import { wellnessProviders } from "../data/wellnessProviders";
// import { counselingProviders } from "../data/counselingProviders";

// function Booking() {
// 	const { category, id } = useParams();
// 	const navigate = useNavigate();
// 	const location = useLocation();

// 	const [provider, setProvider] = useState(null);
// 	const [selectedSlot, setSelectedSlot] = useState("");

// 	useEffect(() => {
// 		const allProviders = [
// 			...healthcareProviders,
// 			...wellnessProviders,
// 			...counselingProviders,
// 		];

// 		const foundProvider = allProviders.find(
// 			(p) =>
// 				p.id === Number(id) &&
// 				p.category.toLowerCase() === category.toLowerCase(),
// 		);

// 		setProvider(foundProvider || null);
// 	}, [id, category]);

// 	// ✅ AFTER LOGIN → COMPLETE BOOKING
// 	useEffect(() => {
// 		const user = JSON.parse(localStorage.getItem("user"));

// 		if (
// 			user &&
// 			location.state?.pendingBooking &&
// 			location.state?.selectedSlot &&
// 			provider
// 		) {
// 			const newBooking = {
// 				id: Date.now(),
// 				userEmail: user.email,
// 				providerName: provider.name,
// 				category: provider.category,
// 				address: provider.address,
// 				slot: location.state.selectedSlot,
// 				time: new Date().toLocaleString(),
// 			};

// 			const existingBookings =
// 				JSON.parse(localStorage.getItem("bookings")) || [];

// 			existingBookings.push(newBooking);
// 			localStorage.setItem("bookings", JSON.stringify(existingBookings));

// 			alert("Booking Confirmed Successfully!");

// 			// prevent repeat
// 			navigate(location.pathname, { replace: true });
// 		}
// 	}, [location.state, provider, navigate, location.pathname]);

// 	const handleBooking = () => {
// 		if (!selectedSlot) {
// 			alert("Please select a time slot");
// 			return;
// 		}

// 		navigate("/login", {
// 			state: {
// 				redirectTo: `/book/${category}/${id}`,
// 				pendingBooking: true,
// 				selectedSlot: selectedSlot,
// 			},
// 		});
// 	};

// 	if (!provider) {
// 		return <h3 className="text-center mt-5">Loading...</h3>;
// 	}

// 	return (
// 		<div className="container text-center mt-5">
// 			<h2>{provider.name}</h2>
// 			<p>{provider.category}</p>
// 			<p>{provider.address}</p>

// 			<h4>Select Time Slot</h4>

// 			{["Morning", "Afternoon", "Evening", "Night"].map((slot) => (
// 				<button
// 					key={slot}
// 					onClick={() => setSelectedSlot(slot)}
// 					style={{
// 						margin: "5px",
// 						background: selectedSlot === slot ? "#0077b6" : "#ccc",
// 					}}>
// 					{slot}
// 				</button>
// 			))}

// 			<br />
// 			<br />

// 			<button onClick={handleBooking}>Confirm Booking</button>
// 		</div>
// 	);
// }

// export default Booking;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { providers as healthcareProviders } from "../data/healthcareProviders";
import { wellnessProviders } from "../data/wellnessProviders";
import { counselingProviders } from "../data/counselingProviders";

function Booking() {
	const { category, id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const [provider, setProvider] = useState(null);
	const [selectedSlot, setSelectedSlot] = useState("");

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

	// useEffect(() => {
	// 	const user = JSON.parse(localStorage.getItem("user"));

	// 	if (
	// 		user &&
	// 		location.state?.pendingBooking &&
	// 		location.state?.selectedSlot &&
	// 		provider
	// 	) {
	// 		const newBooking = {
	// 			id: Date.now(),
	// 			userEmail: user.email,
	// 			providerName: provider.name,
	// 			category: provider.category,
	// 			address: provider.address,
	// 			slot: location.state.selectedSlot,
	// 			time: new Date().toLocaleString(),
	// 		};

	// 		const existingBookings =
	// 			JSON.parse(localStorage.getItem("bookings")) || [];

	// 		existingBookings.push(newBooking);
	// 		localStorage.setItem("bookings", JSON.stringify(existingBookings));

	// 		alert("Booking Confirmed Successfully!");

	// 		navigate(location.pathname, { replace: true });
	// 	}
	// }, [location.state, provider, navigate, location.pathname]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		const isLoggedIn = localStorage.getItem("loggedIn");

		if (
			user &&
			isLoggedIn &&
			location.state?.pendingBooking &&
			location.state?.selectedSlot &&
			provider
		) {
			const newBooking = {
				id: Date.now(),
				userEmail: user.email,
				providerName: provider.name,
				category: provider.category,
				address: provider.address,
				slot: location.state.selectedSlot,
				time: new Date().toLocaleString(),
			};

			const existingBookings =
				JSON.parse(localStorage.getItem("bookings")) || [];

			existingBookings.push(newBooking);
			localStorage.setItem("bookings", JSON.stringify(existingBookings));

			alert("Booking Confirmed Successfully!");

			navigate(location.pathname, { replace: true });
		}
	}, [location.state, provider, navigate, location.pathname]);
	const handleBooking = () => {
		if (!selectedSlot) {
			alert("Please select a time slot");
			return;
		}

		navigate("/login", {
			state: {
				redirectTo: `/book/${category}/${id}`,
				pendingBooking: true,
				selectedSlot: selectedSlot,
			},
		});
	};

	const mapUrl = provider
		? `https://www.google.com/maps/search/?api=1&query=${provider.name}+${provider.address}`
		: "#";

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
		height: "420px",
		width: "600px",
		boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
		color: "white",
	};

	const btnStyle = {
		backgroundColor: "#000",
		color: "#fff",
		fontWeight: "bold",
		borderRadius: "8px",
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
					Confirm <span style={{ color: "#023e8a" }}>Booking</span>
				</h1>

				<div className="d-flex justify-content-center">
					<div className="card p-3" style={cardStyle}>
						<h2 className="fw-bold">{provider.name}</h2>
						<br />
						<h4>Category: {provider.category}</h4>
						<p>📍 {provider.address}</p>
						<p>⭐ {provider.rating}</p>

						{/* TIME SLOT */}
						<div style={{ marginTop: "20px", textAlign: "center" }}>
							<h4>Select Time Slot</h4>

							<div className="d-flex justify-content-center gap-2 mt-2">
								{[
									"Morning 10AM - 12Noon",
									"Afternoon 1PM - 3PM",
									"Evening 5PM - 7PM",
									"Night 8PM - 10PM",
								].map((slot) => (
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

						{/* BUTTONS */}
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
									borderRadius: "8px",
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
