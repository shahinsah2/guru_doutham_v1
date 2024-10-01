const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");

// Route to create a new Location
router.post("/", locationController.createLocation);

// Route to get all Locations
router.get("/", locationController.getAllLocations);

// Route to get a single Location by ID
router.get("/:id", locationController.getLocationById);

// Route to update a Location
router.put("/:id", locationController.updateLocation);

// Route to delete a Location
router.delete("/:id", locationController.deleteLocation);

module.exports = router;
