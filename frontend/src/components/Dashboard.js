import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();

	const [user, setUser] = useState(null);
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
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
				padding: "30px",
			}}>
			<div className="d-flex justify-content-center">
				<div
					style={{
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						borderRadius: "10px",
						border: "2px solid white",
						color: "#fff",
						padding: "20px",
						width: "70%",
						boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
						transition: "0.3s",
					}}>
					<br />
					<h1 className="fw-bold text-center">My Details</h1>
					<br />
					<br />
					<h3 className="fw-bold mt-3">Personal Information</h3>
					<br />
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Name: {user.name}
					</p>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Age: {user.age}
					</p>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						DOB: {user.dob}
					</p>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Email: {user.email}
					</p>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Phone: {user.phone}
					</p>
					<br />
					<h3 className="fw-bold mt-3">Medical Information</h3>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Blood Group: {user.bloodGroup}
					</p>
					<p style={{ fontweight: "bold", fontSize: "large" }}>
						Medical History: {user.medicalHistory}
					</p>
				</div>
			</div>

			<br />
			<br />

			<div className="d-flex justify-content-center">
				<div style={{ width: "80%" }}>
					<h2 className="fw-bold mb-4 text-center" style={{ color: "#023e8a" }}>
						My Bookings
					</h2>

					{bookings.length === 0 ? (
						<p className="text-center">No bookings yet</p>
					) : (
						<div className="row justify-content-center">
							{bookings.map((b) => (
								<div
									className="col-md-4 mb-3 d-flex justify-content-center"
									key={b.id}>
									<div
										style={{
											background: "linear-gradient(135deg, #023e8a, #0077b6)",
											borderRadius: "10px",
											border: "2px solid white",
											color: "#fff",
											padding: "20px",
											boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
											transition: "0.3s",
											width: "100%",
											maxWidth: "300px",
										}}>
										<h5 className="fw-bold">{b.providerName}</h5>
										<p>{b.category}</p>
										<p>📍 {b.address}</p>
										<p>🕒 {b.slot}</p>
										<p>{b.time}</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className="text-center mt-4">
				<button
					className="btn btn-dark"
					onClick={handleLogout}
					style={{
						height: "60px",
						width: "150px",
						borderRadius: "12px",
						background: "linear-gradient(135deg, #023e8a, #0077b6)",
						color: "#fff",
						border: "none",
						fontSize: "20px",
					}}>
					Logout
				</button>
			</div>
		</div>
	);
}

export default Dashboard;
