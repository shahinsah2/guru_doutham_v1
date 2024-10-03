const express = require("express");
const router = express.Router();
const stockLocationController = require("../../controllers/product_library/stockLocationController");

// Get all stock locations
router.get("/", stockLocationController.getAllStockLocations);

// Get stock location by ID
router.get("/:id", stockLocationController.getStockLocationById);

// Create new stock location
router.post("/", stockLocationController.createStockLocation);

// Update stock location by ID
router.put("/:id", stockLocationController.updateStockLocationById);

// Delete stock location by ID
router.delete("/:id", stockLocationController.deleteStockLocationById);

module.exports = router;
