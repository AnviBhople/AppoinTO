const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
	try {
		const newAppt = await Appointment.create(req.body);
		res.status(201).json(newAppt);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
