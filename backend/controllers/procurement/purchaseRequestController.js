const PurchaseRequest = require("../../models/procurement/purchaseRequestModel");

// Create new Purchase Request
exports.createPurchaseRequest = async (req, res) => {
  try {
    const newPurchaseRequest = new PurchaseRequest(req.body);
    const savedRequest = await newPurchaseRequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Purchase Requests
exports.getAllPurchaseRequests = async (req, res) => {
  try {
    const requests = await PurchaseRequest.find();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single Purchase Request by ID
exports.getPurchaseRequestById = async (req, res) => {
  try {
    const request = await PurchaseRequest.findById(req.params.id);
    if (!request)
      return res.status(404).json({ message: "Purchase Request not found" });
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Purchase Request
exports.updatePurchaseRequest = async (req, res) => {
  try {
    const updatedRequest = await PurchaseRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRequest)
      return res.status(404).json({ message: "Purchase Request not found" });
    res.status(200).json(updatedRequest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Purchase Request
exports.deletePurchaseRequest = async (req, res) => {
  try {
    const deletedRequest = await PurchaseRequest.findByIdAndDelete(
      req.params.id
    );
    if (!deletedRequest)
      return res.status(404).json({ message: "Purchase Request not found" });
    res.status(200).json({ message: "Purchase Request deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Move to Next Step: Add PO Quotations
exports.moveToNextStep = async (req, res) => {
  try {
    // Implement your logic for adding PO Quotations
    res.status(200).json({ message: "Moved to next step successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
