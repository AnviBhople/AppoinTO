const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
	name: String,
	category: String,
	type: String,
	rating: Number,
	address: String,
	city: String,
	contact: String,
	timings: String,
});

module.exports = mongoose.model("Provider", providerSchema);
