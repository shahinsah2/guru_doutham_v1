const express = require("express");
const router = express.Router();
const termsController = require("../controllers/termsController");

// Route to create a new Terms and Conditions entry
router.post("/", termsController.createTerms);

// Route to get all Terms and Conditions
router.get("/", termsController.getAllTerms);

// Route to get a single Terms and Conditions by ID
router.get("/:id", termsController.getTermsById);

// Route to update a Terms and Conditions entry
router.put("/:id", termsController.updateTerms);

// Route to delete a Terms and Conditions entry
router.delete("/:id", termsController.deleteTerms);

module.exports = router;
