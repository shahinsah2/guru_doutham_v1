const ItemVariant = require('../../models/product_library/itemVariantModel');

// Create a new Item Variant
exports.createItemVariant = async (req, res) => {
  try {
    const newItemVariant = new ItemVariant(req.body);
    await newItemVariant.save();
    res.status(201).json(newItemVariant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Item Variant', error });
  }
};

// Get all Item Variants
exports.getAllItemVariants = async (req, res) => {
  try {
    const itemVariants = await ItemVariant.find();
    res.status(200).json(itemVariants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Item Variants', error });
  }
};

// Get a specific Item Variant by ID
exports.getItemVariantById = async (req, res) => {
  try {
    const itemVariant = await ItemVariant.findById(req.params.id);
    if (!itemVariant) {
      return res.status(404).json({ message: 'Item Variant not found' });
    }
    res.status(200).json(itemVariant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Item Variant', error });
  }
};

// Update Item Variant
exports.updateItemVariant = async (req, res) => {
  try {
    const updatedItemVariant = await ItemVariant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItemVariant) {
      return res.status(404).json({ message: 'Item Variant not found' });
    }
    res.status(200).json(updatedItemVariant);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Item Variant', error });
  }
};

// Delete Item Variant
exports.deleteItemVariant = async (req, res) => {
  try {
    const itemVariant = await ItemVariant.findByIdAndDelete(req.params.id);
    if (!itemVariant) {
      return res.status(404).json({ message: 'Item Variant not found' });
    }
    res.status(200).json({ message: 'Item Variant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Item Variant', error });
  }
};
