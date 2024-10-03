const express = require('express');
const router = express.Router();
const itemSpecificationController = require('../../controllers/product_library/itemSpecificationController');

// Create a new Item Specification
router.post('/', itemSpecificationController.createItemSpecification);

// Get all Item Specifications
router.get('/', itemSpecificationController.getAllItemSpecifications);

// Get a specific Item Specification by ID
router.get('/:id', itemSpecificationController.getItemSpecificationById);

// Update an Item Specification
router.put('/:id', itemSpecificationController.updateItemSpecification);

// Delete an Item Specification
router.delete('/:id', itemSpecificationController.deleteItemSpecification);

module.exports = router;
