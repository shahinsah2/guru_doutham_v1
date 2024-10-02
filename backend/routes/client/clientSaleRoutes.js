const express = require('express');
const router = express.Router();
const clientSaleController = require('../../controllers/client/clientSaleController');

// Create a new Client Sale
router.post('/', clientSaleController.createClientSale);

// Get all Client Sales
router.get('/', clientSaleController.getAllClientSales);

// Get a specific Client Sale by ID
router.get('/:id', clientSaleController.getClientSaleById);

// Update a Client Sale
router.put('/:id', clientSaleController.updateClientSale);

// Delete a Client Sale
router.delete('/:id', clientSaleController.deleteClientSale);

// View Product related to the Client Sale
router.get('/:id/view-product', clientSaleController.viewProduct);

module.exports = router;
