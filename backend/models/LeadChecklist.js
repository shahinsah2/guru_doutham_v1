const mongoose = require('mongoose');

// Define the Lead Checklist schema
const leadChecklistSchema = new mongoose.Schema({
  checklistName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  checklistQty: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
}, { timestamps: true });

module.exports = mongoose.model('LeadChecklist', leadChecklistSchema);
