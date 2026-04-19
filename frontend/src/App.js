import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Healthcare from "./components/Healthcare";
import HealthcareCategory from "./components/HealthcareCategory";
import Wellness from "./components/Wellness";
import WellnessCategory from "./components/WellnessCategory";
import Counseling from "./components/Counseling";
import CounselingCategory from "./components/CounselingCategory";
import Booking from "./components/Booking";
import Account from "./components/Account";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import AIAssessment from "./components/AIAssessment";
import AIChatBot from "./components/AIChatBot";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/healthcare" element={<Healthcare />} />
				<Route path="/account" element={<Account />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/healthcare/:category"
					element={<HealthcareCategory />}
				/>{" "}
				<Route path="/wellness" element={<Wellness />} />
				<Route path="/wellness/:category" element={<WellnessCategory />} />
				<Route path="/counseling" element={<Counseling />} />
				<Route path="/counseling/:category" element={<CounselingCategory />} />
				<Route
					path="/book/:category/:id"
					element={
						<ProtectedRoute>
							<Booking />
						</ProtectedRoute>
					}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/ai-assessment" element={<AIAssessment />} />
			</Routes>
			<AIChatBot />
			<Footer />
		</>
	);
}

export default App;
