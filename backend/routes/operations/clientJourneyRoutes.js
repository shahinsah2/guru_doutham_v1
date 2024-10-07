const express = require('express');
const router = express.Router();
const clientJourneyController = require('../../controllers/operations/clientJourneyController');

// Create a new Client Journey
router.post('/', clientJourneyController.createClientJourney);

// Get Client Journey by ID
router.get('/:id', clientJourneyController.getClientJourney);

// Update Client Journey
router.put('/:id', clientJourneyController.updateClientJourney);

// Delete Client Journey
router.delete('/:id', clientJourneyController.deleteClientJourney);

module.exports = router;
