// routes/productRoutes.js
const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require('../controllers/productController');

const router = express.Router();

// @route GET /products
// @desc Get all products
router.get('/', getAllProducts);

// @route GET /products/:id
// @desc Get product by ID
router.get('/:id', getProductById);

// @route POST /products
// @desc Create a new product
router.post('/', createProduct);

// @route PUT /products/:id
// @desc Update a product by ID
router.put('/:id', updateProductById);

// @route DELETE /products/:id
// @desc Delete a product by ID
router.delete('/:id', deleteProductById);

module.exports = router;
