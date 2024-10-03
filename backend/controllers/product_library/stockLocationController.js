const StockLocation = require('../../models/product_library/stockLocationModel');

// Get all stock locations
exports.getAllStockLocations = async (req, res) => {
  try {
    const stockLocations = await StockLocation.find();
    res.status(200).json(stockLocations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get stock location by ID
exports.getStockLocationById = async (req, res) => {
  try {
    const stockLocation = await StockLocation.findById(req.params.id);
    if (!stockLocation) return res.status(404).json({ message: "Stock location not found" });
    res.status(200).json(stockLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new stock location
exports.createStockLocation = async (req, res) => {
  const newStockLocation = new StockLocation(req.body);
  try {
    const savedStockLocation = await newStockLocation.save();
    res.status(201).json(savedStockLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update stock location by ID
exports.updateStockLocationById = async (req, res) => {
  try {
    const updatedStockLocation = await StockLocation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStockLocation) return res.status(404).json({ message: "Stock location not found" });
    res.status(200).json(updatedStockLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete stock location by ID
exports.deleteStockLocationById = async (req, res) => {
  try {
    const deletedStockLocation = await StockLocation.findByIdAndDelete(req.params.id);
    if (!deletedStockLocation) return res.status(404).json({ message: "Stock location not found" });
    res.status(200).json({ message: "Stock location deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
