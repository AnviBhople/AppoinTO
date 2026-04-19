const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const providerRoutes = require("./routes/providerRoutes");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/providers", providerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
	res.send("Backend working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
