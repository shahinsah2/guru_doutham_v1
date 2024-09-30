const mongoose = require('mongoose');


const serviceStatusSchema = new mongoose.Schema({
  statusName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
}, { timestamps: true });

module.exports = mongoose.model('ServiceStatus', serviceStatusSchema);
