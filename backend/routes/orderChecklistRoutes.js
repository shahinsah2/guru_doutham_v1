const express = require("express");
const router = express.Router();
const orderChecklistController = require("../controllers/orderChecklistController");

// Route to create a new checklist
router.post("/", orderChecklistController.createChecklist);

// Route to get all checklists
router.get("/", orderChecklistController.getAllChecklists);

// Route to get a checklist by ID
router.get("/:id", orderChecklistController.getChecklistById);

// Route to update a checklist
router.put("/:id", orderChecklistController.updateChecklist);

// Route to delete a checklist
router.delete("/:id", orderChecklistController.deleteChecklist);

module.exports = router;
