const ItemSpecification = require('../../models/product_library/itemSpecificationModel');

// Create a new Item Specification
exports.createItemSpecification = async (req, res) => {
  try {
    const newItemSpecification = new ItemSpecification(req.body);
    await newItemSpecification.save();
    res.status(201).json(newItemSpecification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Item Specifications
exports.getAllItemSpecifications = async (req, res) => {
  try {
    const itemSpecifications = await ItemSpecification.find();
    res.status(200).json(itemSpecifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific Item Specification by ID
exports.getItemSpecificationById = async (req, res) => {
  try {
    const itemSpecification = await ItemSpecification.findById(req.params.id);
    if (!itemSpecification) return res.status(404).json({ message: 'Item Specification not found' });
    res.status(200).json(itemSpecification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Item Specification
exports.updateItemSpecification = async (req, res) => {
  try {
    const itemSpecification = await ItemSpecification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!itemSpecification) return res.status(404).json({ message: 'Item Specification not found' });
    res.status(200).json(itemSpecification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an Item Specification
exports.deleteItemSpecification = async (req, res) => {
  try {
    const itemSpecification = await ItemSpecification.findByIdAndDelete(req.params.id);
    if (!itemSpecification) return res.status(404).json({ message: 'Item Specification not found' });
    res.status(200).json({ message: 'Item Specification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
