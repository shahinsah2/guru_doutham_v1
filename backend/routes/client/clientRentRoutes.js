const express = require('express');
const router = express.Router();
const clientRentController = require('../../controllers/client/clientRentController');

// Create a new Client Rent
router.post('/', clientRentController.createClientRent);

// Get all Client Rents
router.get('/', clientRentController.getAllClientRents);

// Get a specific Client Rent by ID
router.get('/:id', clientRentController.getClientRentById);

// Update a Client Rent
router.put('/:id', clientRentController.updateClientRent);

// Delete a Client Rent
router.delete('/:id', clientRentController.deleteClientRent);

module.exports = router;
