const express = require("express");
const router = express.Router();
const serviceStatusController = require("../controllers/serviceStatusController");

// Route to create a new service status
router.post("/", serviceStatusController.createServiceStatus);

// Route to get all service statuses
router.get("/", serviceStatusController.getAllServiceStatuses);

// Route to get a service status by ID
router.get("/:id", serviceStatusController.getServiceStatusById);

// Route to update a service status
router.put("/:id", serviceStatusController.updateServiceStatus);

// Route to delete a service status
router.delete("/:id", serviceStatusController.deleteServiceStatus);

module.exports = router;
