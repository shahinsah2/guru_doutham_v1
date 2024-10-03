const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  sl_no: {
    type: Number,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  warranty: {
    type: String,
    required: true,
  },
  warranty_time: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Asset', assetSchema);
