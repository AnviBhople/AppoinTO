const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");

router.get("/:category", providerController.getProvidersByCategory);

router.get("/details/:id", providerController.getProviderById);

module.exports = router;
