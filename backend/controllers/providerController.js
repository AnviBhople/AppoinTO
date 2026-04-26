const Provider = require("../models/Provider");

// exports.getProvidersByCategory = async (req, res) => {
// 	try {
// 		const group = req.params.category.toLowerCase();

// 		let query;
// 		if (group === "counseling" || group === "counselling") {
// 			query = { category: { $in: ["counseling", "counselling"] } };
// 		} else {
// 			query = { category: group };
// 		}

// 		const providers = await Provider.find(query);
// 		res.json(providers);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// };

exports.getProvidersByCategory = async (req, res) => {
	try {
		const group = req.params.category.toLowerCase();
		// Capture the 'location' from the URL query string
		const city = req.query.location;

		let query;
		if (group === "counseling" || group === "counselling") {
			query = { category: { $in: ["counseling", "counselling"] } };
		} else {
			query = { category: group };
		}

		// ADDITION: Filter by city if it exists in the search
		if (city) {
			query.city = { $regex: new RegExp(city, "i") };
		}

		const providers = await Provider.find(query);
		res.json(providers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getProviderById = async (req, res) => {
	try {
		const { id } = req.params;
		let provider;

		const numericId = parseInt(id);
		if (!isNaN(numericId)) {
			provider = await Provider.findOne({ id: numericId });
		}

		if (!provider) {
			provider = await Provider.findOne({ id: id });
		}

		if (!provider && id.length === 24) {
			provider = await Provider.findById(id);
		}

		if (!provider) return res.status(404).json({ message: "Not found" });
		res.json(provider);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
