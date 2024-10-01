const express = require("express");
const router = express.Router();
const purchaseOrderController = require("../../controllers/procurement/purchaseOrderController");

// Create a new Purchase Order
router.post("/", purchaseOrderController.createPurchaseOrder);

// Get all Purchase Orders
router.get("/", purchaseOrderController.getAllPurchaseOrders);

// Get a specific Purchase Order by ID
router.get("/:id", purchaseOrderController.getPurchaseOrderById);

// Update a Purchase Order
router.put("/:id", purchaseOrderController.updatePurchaseOrder);

// Delete a Purchase Order
router.delete("/:id", purchaseOrderController.deletePurchaseOrder);

// View Product related to the Purchase Order
router.get("/:id/view-product", purchaseOrderController.viewProduct);

module.exports = router;
