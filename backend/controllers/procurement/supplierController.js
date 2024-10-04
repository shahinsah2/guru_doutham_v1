const Supplier = require("../../models/procurement/Supplier");

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a supplier by ID
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier)
      return res.status(404).json({ message: "Supplier not found" });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new supplier
exports.createSupplier = async (req, res) => {
  const newSupplier = new Supplier(req.body);
  try {
    await newSupplier.save();
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier
exports.updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSupplier)
      return res.status(404).json({ message: "Supplier not found" });
    res.status(200).json(updatedSupplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
    if (!deletedSupplier)
      return res.status(404).json({ message: "Supplier not found" });
    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
