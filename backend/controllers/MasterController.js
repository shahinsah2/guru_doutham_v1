const Master = require("../models/Master");

// Get all masters
exports.getAllMasters = async (req, res) => {
  try {
    const masters = await Master.find();
    res.status(200).json(masters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single master by ID
exports.getMasterById = async (req, res) => {
  try {
    const master = await Master.findById(req.params.id);
    if (!master) return res.status(404).json({ message: "Master not found" });
    res.status(200).json(master);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new master role
exports.createMaster = async (req, res) => {
  try {
    const newMaster = new Master(req.body);
    await newMaster.save();
    res.status(201).json(newMaster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update master role by ID
exports.updateMasterById = async (req, res) => {
  try {
    const updatedMaster = await Master.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMaster)
      return res.status(404).json({ message: "Master not found" });
    res.status(200).json(updatedMaster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete master role by ID
exports.deleteMasterById = async (req, res) => {
  try {
    const deletedMaster = await Master.findByIdAndDelete(req.params.id);
    if (!deletedMaster)
      return res.status(404).json({ message: "Master not found" });
    res.status(200).json({ message: "Master deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
