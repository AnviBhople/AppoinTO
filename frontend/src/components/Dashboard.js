import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [bookings, setBookings] = useState([]);

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);

		const storedUser = JSON.parse(localStorage.getItem("user"));
		const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

		if (!storedUser) {
			navigate("/login");
			return;
		}

		setUser(storedUser);
		const userBookings = allBookings.filter(
			(b) => b.userEmail === storedUser.email,
		);
		setBookings(userBookings);

		return () => window.removeEventListener("resize", handleResize);
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("loggedIn");
		alert("Logged out successfully");
		navigate("/login");
		window.location.reload();
	};

	if (!user) return null;

	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundColor: "#f5f3f4",
				fontFamily: "Times New Roman",
				padding: isMobile ? "15px" : "30px",
			}}>
			<div className="d-flex justify-content-center">
				<div
					style={{
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						borderRadius: "15px",
						border: "2px solid white",
						color: "#fff",
						padding: isMobile ? "20px" : "40px",
						width: isMobile ? "95%" : "70%",
						boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
					}}>
					<h1
						className="fw-bold text-center mb-4"
						style={{ fontSize: isMobile ? "1.8rem" : "2.5rem" }}>
						My Details
					</h1>

					<div className="row">
						<div className="col-md-6">
							<h4 className="fw-bold border-bottom pb-2 mb-3">
								Personal Information
							</h4>
							<p style={{ fontSize: "large" }}>
								<strong>Name:</strong> {user.name}
							</p>
							<p style={{ fontSize: "large" }}>
								<strong>Age:</strong> {user.age}
							</p>
							<p style={{ fontSize: "large" }}>
								<strong>DOB:</strong> {user.dob}
							</p>
							<p style={{ fontSize: "large" }}>
								<strong>Email:</strong> {user.email}
							</p>
							<p style={{ fontSize: "large" }}>
								<strong>Phone:</strong> {user.phone}
							</p>
						</div>
						<div className="col-md-6 mt-4 mt-md-0">
							<h4 className="fw-bold border-bottom pb-2 mb-3">
								Medical Information
							</h4>
							<p style={{ fontSize: "large" }}>
								<strong>Blood Group:</strong> {user.bloodGroup}
							</p>
							<p style={{ fontSize: "large" }}>
								<strong>Medical History:</strong> {user.medicalHistory}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<div className="container">
					<h2 className="fw-bold mb-4 text-center" style={{ color: "#023e8a" }}>
						My Bookings
					</h2>

					{bookings.length === 0 ? (
						<p className="text-center italic">
							No bookings found in your history.
						</p>
					) : (
						<div className="row g-4 justify-content-center">
							{bookings.map((b) => (
								<div
									className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
									key={b.id}>
									<div
										style={{
											background: "linear-gradient(135deg, #023e8a, #0077b6)",
											borderRadius: "12px",
											border: "2px solid white",
											color: "#fff",
											padding: "20px",
											boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
											width: "100%",
											maxWidth: "350px",
										}}>
										<h5 className="fw-bold text-warning">{b.providerName}</h5>
										<p className="mb-1">
											<strong>Category:</strong> {b.category}
										</p>
										<p className="mb-1">
											<strong>Address:</strong> 📍 {b.address}
										</p>
										<p className="mb-1">
											<strong>Slot:</strong> 🕒 {b.slot}
										</p>
										<p className="mb-0">
											<strong>Time:</strong>{" "}
											<span style={{ color: "#FFD700" }}>{b.time}</span>
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			<div className="text-center mt-5 mb-5">
				<button
					onClick={handleLogout}
					style={{
						height: "60px",
						width: isMobile ? "80%" : "200px",
						borderRadius: "30px",
						background: "linear-gradient(135deg, #ef233c, #d90429)",
						color: "#fff",
						border: "2px solid white",
						fontSize: "20px",
						fontWeight: "bold",
						boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
					}}>
					Logout
				</button>
			</div>
		</div>
	);
}

export default Dashboard;
