const PurchaseOrder = require("../../models/procurement/purchaseOrderModel");

// Create new Purchase Order
exports.createPurchaseOrder = async (req, res) => {
  try {
    const newOrder = new PurchaseOrder(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Purchase Orders
exports.getAllPurchaseOrders = async (req, res) => {
  try {
    const orders = await PurchaseOrder.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single Purchase Order by ID
exports.getPurchaseOrderById = async (req, res) => {
  try {
    const order = await PurchaseOrder.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Purchase Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Purchase Order
exports.updatePurchaseOrder = async (req, res) => {
  try {
    const updatedOrder = await PurchaseOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrder)
      return res.status(404).json({ message: "Purchase Order not found" });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Purchase Order
exports.deletePurchaseOrder = async (req, res) => {
  try {
    const deletedOrder = await PurchaseOrder.findByIdAndDelete(req.params.id);
    if (!deletedOrder)
      return res.status(404).json({ message: "Purchase Order not found" });
    res.status(200).json({ message: "Purchase Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View Product related to Purchase Order
exports.viewProduct = async (req, res) => {
  try {
    const order = await PurchaseOrder.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Purchase Order not found" });

    // Logic to fetch and display product details related to the order
    // Replace this with actual product fetching logic
    const productDetails = {
      productName: "Example Product",
      price: 5000,
      quantity: order.product_qty,
    };

    res
      .status(200)
      .json({
        message: "Product details fetched successfully",
        productDetails,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
