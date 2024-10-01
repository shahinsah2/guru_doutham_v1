const express = require("express");
const router = express.Router();
const purchaseRequestController = require("../../controllers/procurement/purchaseRequestController");

// Create a new Purchase Request
router.post("/", purchaseRequestController.createPurchaseRequest);

// Get all Purchase Requests
router.get("/", purchaseRequestController.getAllPurchaseRequests);

// Get a specific Purchase Request by ID
router.get("/:id", purchaseRequestController.getPurchaseRequestById);

// Update a Purchase Request
router.put("/:id", purchaseRequestController.updatePurchaseRequest);

// Delete a Purchase Request
router.delete("/:id", purchaseRequestController.deletePurchaseRequest);

// Move to Next Step: Add PO Quotations
router.post("/:id/move-to-next", purchaseRequestController.moveToNextStep);

module.exports = router;
