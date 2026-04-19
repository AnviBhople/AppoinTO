const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	provider: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Provider",
		required: true,
	},
	date: { type: Date, required: true },
	status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
