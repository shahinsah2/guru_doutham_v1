const express = require("express");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} = require("../../controllers/operations/serviceController");

const router = express.Router();

// Route to create a service
router.post("/", createService);

// Route to get all services
router.get("/", getAllServices);

// Route to get a single service by ID
router.get("/:id", getServiceById);

// Route to update a service by ID
router.put("/:id", updateService);

// Route to delete a service by ID
router.delete("/:id", deleteService);

module.exports = router;
