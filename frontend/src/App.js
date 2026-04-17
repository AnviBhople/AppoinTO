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

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/healthcare" element={<Healthcare />} />
				<Route
					path="/healthcare/:category"
					element={<HealthcareCategory />}
				/>{" "}
				<Route path="/wellness" element={<Wellness />} />
				<Route path="/wellness/:category" element={<WellnessCategory />} />
				<Route path="/counseling" element={<Counseling />} />
				<Route path="/counseling/:category" element={<CounselingCategory />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
