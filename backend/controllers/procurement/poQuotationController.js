const POQuotation = require("../../models/procurement/poQuotationModel");

// Create new PO Quotation
exports.createPOQuotation = async (req, res) => {
  try {
    const newQuotation = new POQuotation(req.body);
    const savedQuotation = await newQuotation.save();
    res.status(201).json(savedQuotation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all PO Quotations
exports.getAllPOQuotations = async (req, res) => {
  try {
    const quotations = await POQuotation.find();
    res.status(200).json(quotations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single PO Quotation by ID
exports.getPOQuotationById = async (req, res) => {
  try {
    const quotation = await POQuotation.findById(req.params.id);
    if (!quotation)
      return res.status(404).json({ message: "PO Quotation not found" });
    res.status(200).json(quotation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a PO Quotation
exports.updatePOQuotation = async (req, res) => {
  try {
    const updatedQuotation = await POQuotation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuotation)
      return res.status(404).json({ message: "PO Quotation not found" });
    res.status(200).json(updatedQuotation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a PO Quotation
exports.deletePOQuotation = async (req, res) => {
  try {
    const deletedQuotation = await POQuotation.findByIdAndDelete(req.params.id);
    if (!deletedQuotation)
      return res.status(404).json({ message: "PO Quotation not found" });
    res.status(200).json({ message: "PO Quotation deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Move to Next Step: Create Purchase Orders
exports.moveToNextStep = async (req, res) => {
  try {
    const updatedQuotation = await POQuotation.findByIdAndUpdate(
      req.params.id,
      { move_to_next: "Purchase Orders Created" },
      { new: true }
    );
    if (!updatedQuotation)
      return res.status(404).json({ message: "PO Quotation not found" });
    res
      .status(200)
      .json({ message: "Moved to next step successfully", updatedQuotation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
