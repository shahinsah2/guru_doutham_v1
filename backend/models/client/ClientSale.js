const mongoose = require('mongoose');

const clientSaleSchema = new mongoose.Schema({
  client_id: {
    type: String,
    required: true,
    unique: true,
  },
  client_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  purchase_cost: {
    type: String,
    required: true,
  },
  sale_cost: {
    type: String,
    required: true,
  },
  rental_start_date: {
    type: Date,
    required: true,
  },
  warranty_end_date: {
    type: Date,
    required: true,
  },
  product: {
    type: Object,
    required: false,
    // Product details go here (optional)
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ClientSale', clientSaleSchema);
