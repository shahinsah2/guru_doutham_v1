const express = require("express");
const categoryController = require('../controllers/categoryController');

const router = express.Router();
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategoryById);
router.delete('/categories/:id', categoryController.deleteCategoryById);

module.exports = router;