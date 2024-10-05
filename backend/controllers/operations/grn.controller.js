const GRN = require("../../models/operations/grn.model");

// Create GRN
exports.createGRN = async (req, res) => {
  try {
    const newGRN = new GRN(req.body);
    const savedGRN = await newGRN.save();
    res.status(201).json({
      message: "GRN created successfully",
      grn: savedGRN,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All GRNs
exports.getAllGRNs = async (req, res) => {
  try {
    const grns = await GRN.find().sort({ createdAt: -1 });
    res.status(200).json(grns);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Single GRN by ID
exports.getGRNById = async (req, res) => {
  try {
    const grn = await GRN.findById(req.params.id);
    if (!grn) {
      return res.status(404).json({ message: "GRN not found" });
    }
    res.status(200).json(grn);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update GRN
exports.updateGRN = async (req, res) => {
  try {
    const updatedGRN = await GRN.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedGRN) {
      return res.status(404).json({ message: "GRN not found" });
    }
    res.status(200).json({
      message: "GRN updated successfully",
      updated_grn: updatedGRN,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete GRN
exports.deleteGRN = async (req, res) => {
  try {
    const deletedGRN = await GRN.findByIdAndDelete(req.params.id);
    if (!deletedGRN) {
      return res.status(404).json({ message: "GRN not found" });
    }
    res.status(200).json({ message: "GRN deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
