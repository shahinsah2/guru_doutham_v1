const express = require("express");
const router = express.Router();
const servicePriorityController = require("../controllers/servicePriorityController");

// Get all service priorities
router.get("/", servicePriorityController.getAllServicePriorities);

// Get a single service priority by ID
router.get("/:id", servicePriorityController.getServicePriorityById);

// Create a new service priority
router.post("/", servicePriorityController.createServicePriority);

// Update a service priority
router.put("/:id", servicePriorityController.updateServicePriority);

// Delete a service priority
router.delete("/:id", servicePriorityController.deleteServicePriority);

// Toggle the status of a service priority
router.patch("/:id/toggle-status", servicePriorityController.toggleStatus);

module.exports = router;
