const express = require("express");
const router = express.Router();
const leadChecklistController = require("../controllers/leadChecklistController");

// Route to create a new lead checklist
router.post("/", leadChecklistController.createLeadChecklist);

// Route to get all lead checklists
router.get("/", leadChecklistController.getAllLeadChecklists);

// Route to get a lead checklist by ID
router.get("/:id", leadChecklistController.getLeadChecklistById);

// Route to update a lead checklist
router.put("/:id", leadChecklistController.updateLeadChecklist);

// Route to delete a lead checklist
router.delete("/:id", leadChecklistController.deleteLeadChecklist);

module.exports = router;
