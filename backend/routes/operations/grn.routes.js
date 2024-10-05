const express = require("express");
const router = express.Router();
const {
  createGRN,
  getAllGRNs,
  getGRNById,
  updateGRN,
  deleteGRN
} = require("../../controllers/operations/grn.controller");

// Route to create a new GRN
router.post("/", createGRN);

// Route to get all GRNs
router.get("/", getAllGRNs);

// Route to get a single GRN by ID
router.get("/:id", getGRNById);

// Route to update a GRN
router.put("/:id", updateGRN);

// Route to delete a GRN
router.delete("/:id", deleteGRN);

module.exports = router;
