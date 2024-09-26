const express = require('express');
const router = express.Router();
const masterController = require('../controllers/MasterController');

// Define routes for CRUD operations
router.get('/', masterController.getAllMasters);
router.get('/:id', masterController.getMasterById);
router.post('/', masterController.createMaster);
router.put('/:id', masterController.updateMasterById);
router.delete('/:id', masterController.deleteMasterById);

module.exports = router;
