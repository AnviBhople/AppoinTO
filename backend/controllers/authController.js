const User = require("../models/User");

exports.register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const newUser = await User.create({ name, email, password });
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
