const express = require('express');
const router = express.Router();
const itemVariantController = require('../../controllers/product_library/itemVariantController');

// Create a new Item Variant
router.post('/', itemVariantController.createItemVariant);

// Get all Item Variants
router.get('/', itemVariantController.getAllItemVariants);

// Get a specific Item Variant by ID
router.get('/:id', itemVariantController.getItemVariantById);

// Update an Item Variant
router.put('/:id', itemVariantController.updateItemVariant);

// Delete an Item Variant
router.delete('/:id', itemVariantController.deleteItemVariant);

module.exports = router;
