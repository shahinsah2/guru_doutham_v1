const ClientRent = require('../../models/client/ClientRent');

// Create Client Rent
exports.createClientRent = async (req, res) => {
  try {
    const rent = new ClientRent(req.body);
    await rent.save();
    res.status(201).json(rent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client rent', error });
  }
};

// Get All Client Rents
exports.getAllClientRents = async (req, res) => {
  try {
    const rents = await ClientRent.find();
    res.status(200).json(rents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client rents', error });
  }
};

// Get a Specific Client Rent by ID
exports.getClientRentById = async (req, res) => {
  try {
    const rent = await ClientRent.findById(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: 'Client rent not found' });
    }
    res.status(200).json(rent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client rent', error });
  }
};

// Update Client Rent
exports.updateClientRent = async (req, res) => {
  try {
    const rent = await ClientRent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rent) {
      return res.status(404).json({ message: 'Client rent not found' });
    }
    res.status(200).json(rent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client rent', error });
  }
};

// Delete Client Rent
exports.deleteClientRent = async (req, res) => {
  try {
    const rent = await ClientRent.findByIdAndDelete(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: 'Client rent not found' });
    }
    res.status(200).json({ message: 'Client rent deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client rent', error });
  }
};
