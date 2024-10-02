const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_image: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ['Laptop', 'Destop', 'Branded Systems', 'Assembled', 'Monitors'],
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  specifications: {
    type: String,
    trim: true,
  },
  active_status: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('ProductLibrary', productSchema);
