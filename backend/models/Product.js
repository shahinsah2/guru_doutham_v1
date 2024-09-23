const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
  product_image: {
    type: String,
    required: true,
  },
  configuration_type: {
    type: String,
    required: true,
  },
  product_qty: {
    type: Number,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category',
   
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Brand',
    
  },
  description: {
    type: String,
  },
  specifications: {
    type: String,
  },
  product_status: {
    type: String,
    enum: ['available', 'out_of_stock', 'discontinued'],
    required: true,
  },
  purchase_price: {
    type: Number,
    required: true,
  },
  price_per_date: {
    type: Number,
    required: true,
  },
  price_per_month_1: {
    type: Number,
    required: true,
  },
  price_per_month_6: {
    type: Number,
    required: true,
  },
  price_per_year: {
    type: Number,
    required: true,
  },
  active_status: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
