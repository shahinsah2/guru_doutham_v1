const ServiceStatus = require("../models/ServiceStatus");

// Create a new service status
exports.createServiceStatus = async (req, res) => {
  try {
    const status = new ServiceStatus(req.body);
    await status.save();
    res.status(201).json(status);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all service statuses
exports.getAllServiceStatuses = async (req, res) => {
  try {
    const statuses = await ServiceStatus.find();
    res.status(200).json(statuses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single service status by ID
exports.getServiceStatusById = async (req, res) => {
  try {
    const status = await ServiceStatus.findById(req.params.id);
    if (!status) {
      return res.status(404).json({ error: "Status not found" });
    }
    res.status(200).json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a service status
exports.updateServiceStatus = async (req, res) => {
  try {
    const status = await ServiceStatus.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!status) {
      return res.status(404).json({ error: "Status not found" });
    }
    res.status(200).json(status);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a service status
exports.deleteServiceStatus = async (req, res) => {
  try {
    const status = await ServiceStatus.findByIdAndDelete(req.params.id);
    if (!status) {
      return res.status(404).json({ error: "Status not found" });
    }
    res.status(200).json({ message: "Status deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
