const express = require('express');
const router = express.Router();
const gradeController = require('../../controllers/product_library/gradeController');

// Create a new Grade
router.post('/', gradeController.createGrade);

// Get all Grades
router.get('/', gradeController.getAllGrades);

// Get a specific Grade by ID
router.get('/:id', gradeController.getGradeById);

// Update a Grade
router.put('/:id', gradeController.updateGrade);

// Delete a Grade
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
