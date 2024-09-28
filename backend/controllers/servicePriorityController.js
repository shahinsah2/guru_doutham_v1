const ServicePriority = require("../models/ServicePriority");

// Get all service priority levels
exports.getAllServicePriorities = async (req, res) => {
  try {
    const priorities = await ServicePriority.find();
    res.status(200).json(priorities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single service priority by ID
exports.getServicePriorityById = async (req, res) => {
  try {
    const priority = await ServicePriority.findById(req.params.id);
    if (!priority)
      return res.status(404).json({ message: "Service Priority not found" });
    res.status(200).json(priority);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new service priority
exports.createServicePriority = async (req, res) => {
  try {
    const { priority_level, description } = req.body;

    const newPriority = new ServicePriority({
      priority_level,
      description,
      status: true,
    });

    await newPriority.save();
    res.status(201).json(newPriority);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing service priority
exports.updateServicePriority = async (req, res) => {
  try {
    const updatedPriority = await ServicePriority.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPriority)
      return res.status(404).json({ message: "Service Priority not found" });
    res.status(200).json(updatedPriority);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a service priority
exports.deleteServicePriority = async (req, res) => {
  try {
    const deletedPriority = await ServicePriority.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPriority)
      return res.status(404).json({ message: "Service Priority not found" });
    res.status(200).json({ message: "Service Priority deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Toggle the active status of a service priority
exports.toggleStatus = async (req, res) => {
  try {
    const priority = await ServicePriority.findById(req.params.id);
    if (!priority)
      return res.status(404).json({ message: "Service Priority not found" });

    priority.status = !priority.status;
    await priority.save();

    res.status(200).json(priority);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
