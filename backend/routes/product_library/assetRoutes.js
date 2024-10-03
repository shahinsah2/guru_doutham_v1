const express = require('express');
const router = express.Router();
const assetController = require('../../controllers/product_library/assetController');

// Create a new Asset
router.post('/', assetController.createAsset);

// Get all Assets
router.get('/', assetController.getAllAssets);

// Get a specific Asset by ID
router.get('/:id', assetController.getAssetById);

// Update an Asset
router.put('/:id', assetController.updateAsset);

// Delete an Asset
router.delete('/:id', assetController.deleteAsset);

module.exports = router;
