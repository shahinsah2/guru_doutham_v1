const LeadChecklist = require('../models/LeadChecklist');

// Create a new lead checklist
exports.createLeadChecklist = async (req, res) => {
  try {
    const checklist = new LeadChecklist(req.body);
    await checklist.save();
    res.status(201).json(checklist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all lead checklists
exports.getAllLeadChecklists = async (req, res) => {
  try {
    const checklists = await LeadChecklist.find();
    res.status(200).json(checklists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single lead checklist by ID
exports.getLeadChecklistById = async (req, res) => {
  try {
    const checklist = await LeadChecklist.findById(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a lead checklist
exports.updateLeadChecklist = async (req, res) => {
  try {
    const checklist = await LeadChecklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json(checklist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a lead checklist
exports.deleteLeadChecklist = async (req, res) => {
  try {
    const checklist = await LeadChecklist.findByIdAndDelete(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json({ message: "Checklist deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
