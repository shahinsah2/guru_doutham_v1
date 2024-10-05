const DeliveryChallan = require("../../models/operations/DeliveryChallan");

// Create a new Delivery Challan
exports.createDeliveryChallan = async (req, res) => {
  try {
    const deliveryChallan = new DeliveryChallan(req.body);
    await deliveryChallan.save();
    res.status(201).json(deliveryChallan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Delivery Challans
exports.getDeliveryChallans = async (req, res) => {
  try {
    const deliveryChallans = await DeliveryChallan.find();
    res.status(200).json(deliveryChallans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Delivery Challan by ID
exports.getDeliveryChallanById = async (req, res) => {
  try {
    const deliveryChallan = await DeliveryChallan.findById(req.params.id);
    if (!deliveryChallan) {
      return res.status(404).json({ message: "Delivery Challan not found" });
    }
    res.status(200).json(deliveryChallan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Delivery Challan by ID
exports.updateDeliveryChallan = async (req, res) => {
  try {
    const deliveryChallan = await DeliveryChallan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!deliveryChallan) {
      return res.status(404).json({ message: "Delivery Challan not found" });
    }
    res.status(200).json(deliveryChallan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Delivery Challan by ID
exports.deleteDeliveryChallan = async (req, res) => {
  try {
    const deliveryChallan = await DeliveryChallan.findByIdAndDelete(
      req.params.id
    );
    if (!deliveryChallan) {
      return res.status(404).json({ message: "Delivery Challan not found" });
    }
    res.status(200).json({ message: "Delivery Challan deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
