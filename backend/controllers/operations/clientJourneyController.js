const ClientJourney = require('../../models/operations/ClientJourney');

// Create a new Client Journey
exports.createClientJourney = async (req, res) => {
  try {
    const clientJourney = new ClientJourney(req.body);
    await clientJourney.save();
    res.status(201).json(clientJourney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Client Journey by ID
exports.getClientJourney = async (req, res) => {
  try {
    const clientJourney = await ClientJourney.findById(req.params.id)
      .populate('client')
      .populate('lead')
      .populate('quotation')
      .populate('order')
      .populate('dc')
      .populate('grn');
    if (!clientJourney) return res.status(404).json({ message: 'Client Journey not found' });
    res.json(clientJourney);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Client Journey
exports.updateClientJourney = async (req, res) => {
  try {
    const clientJourney = await ClientJourney.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!clientJourney) return res.status(404).json({ message: 'Client Journey not found' });
    res.json(clientJourney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Client Journey
exports.deleteClientJourney = async (req, res) => {
  try {
    const clientJourney = await ClientJourney.findByIdAndDelete(req.params.id);
    if (!clientJourney) return res.status(404).json({ message: 'Client Journey not found' });
    res.json({ message: 'Client Journey deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
