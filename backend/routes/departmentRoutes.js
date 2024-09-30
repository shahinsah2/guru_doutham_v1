const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Get all departments
router.get('/', departmentController.getAllDepartments);

// Get a single department by ID
router.get('/:id', departmentController.getDepartmentById);

// Create a new department
router.post('/', departmentController.createDepartment);

// Update a department
router.put('/:id', departmentController.updateDepartment);

// Delete a department
router.delete('/:id', departmentController.deleteDepartment);

// Toggle the status of a department
router.patch('/:id/toggle-status', departmentController.toggleStatus);

module.exports = router;
