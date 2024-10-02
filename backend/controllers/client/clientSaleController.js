const ClientSale = require('../../models/client/ClientSale');

// Create Client Sale
exports.createClientSale = async (req, res) => {
  try {
    const sale = new ClientSale(req.body);
    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client sale', error });
  }
};

// Get All Client Sales
exports.getAllClientSales = async (req, res) => {
  try {
    const sales = await ClientSale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client sales', error });
  }
};

// Get a Specific Client Sale by ID
exports.getClientSaleById = async (req, res) => {
  try {
    const sale = await ClientSale.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Client sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client sale', error });
  }
};

// Update Client Sale
exports.updateClientSale = async (req, res) => {
  try {
    const sale = await ClientSale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sale) {
      return res.status(404).json({ message: 'Client sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client sale', error });
  }
};

// Delete Client Sale
exports.deleteClientSale = async (req, res) => {
  try {
    const sale = await ClientSale.findByIdAndDelete(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Client sale not found' });
    }
    res.status(200).json({ message: 'Client sale deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client sale', error });
  }
};

// View Product related to Client Sale
exports.viewProduct = async (req, res) => {
  try {
    const sale = await ClientSale.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Client sale not found' });
    }
    // Assuming sale has a product field that stores product information
    res.status(200).json(sale.product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product related to client sale', error });
  }
};
