const OrderChecklist = require('../models/OrderChecklist');

// Create a new checklist
exports.createChecklist = async (req, res) => {
  try {
    const checklist = new OrderChecklist(req.body);
    await checklist.save();
    res.status(201).json(checklist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all checklists
exports.getAllChecklists = async (req, res) => {
  try {
    const checklists = await OrderChecklist.find();
    res.status(200).json(checklists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single checklist by ID
exports.getChecklistById = async (req, res) => {
  try {
    const checklist = await OrderChecklist.findById(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a checklist
exports.updateChecklist = async (req, res) => {
  try {
    const checklist = await OrderChecklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json(checklist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a checklist
exports.deleteChecklist = async (req, res) => {
  try {
    const checklist = await OrderChecklist.findByIdAndDelete(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: "Checklist not found" });
    }
    res.status(200).json({ message: "Checklist deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
