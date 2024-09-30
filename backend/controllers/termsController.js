const TermsAndConditions = require("../models/TermsAndConditions");

// Create a new Terms and Conditions entry
exports.createTerms = async (req, res) => {
  try {
    const terms = new TermsAndConditions(req.body);
    await terms.save();
    res.status(201).json(terms);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all Terms and Conditions
exports.getAllTerms = async (req, res) => {
  try {
    const terms = await TermsAndConditions.find();
    res.status(200).json(terms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single Terms and Conditions by ID
exports.getTermsById = async (req, res) => {
  try {
    const terms = await TermsAndConditions.findById(req.params.id);
    if (!terms) {
      return res.status(404).json({ error: "Terms not found" });
    }
    res.status(200).json(terms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Terms and Conditions entry
exports.updateTerms = async (req, res) => {
  try {
    const terms = await TermsAndConditions.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!terms) {
      return res.status(404).json({ error: "Terms not found" });
    }
    res.status(200).json(terms);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Terms and Conditions entry
exports.deleteTerms = async (req, res) => {
  try {
    const terms = await TermsAndConditions.findByIdAndDelete(req.params.id);
    if (!terms) {
      return res.status(404).json({ error: "Terms not found" });
    }
    res.status(200).json({ message: "Terms deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
