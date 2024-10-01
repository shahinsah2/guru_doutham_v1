const express = require("express");
const router = express.Router();
const poQuotationController = require("../../controllers/procurement/poQuotationController");

// Create a new PO Quotation
router.post("/", poQuotationController.createPOQuotation);

// Get all PO Quotations
router.get("/", poQuotationController.getAllPOQuotations);

// Get a specific PO Quotation by ID
router.get("/:id", poQuotationController.getPOQuotationById);

// Update a PO Quotation
router.put("/:id", poQuotationController.updatePOQuotation);

// Delete a PO Quotation
router.delete("/:id", poQuotationController.deletePOQuotation);

// Move to Next Step: Create Purchase Orders
router.post("/:id/move-to-next", poQuotationController.moveToNextStep);

module.exports = router;
