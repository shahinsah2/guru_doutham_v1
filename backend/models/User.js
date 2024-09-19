const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');  // To generate unique user codes
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  login_id: {
    type: String,
    unique: true,
    default: null,
  },
  user_code: {
    type: String,
    unique: true,
    required: true,
  },
  email_id: {
    type: String, // Either remove this field if not needed
    unique: true, // Or ensure that it's properly assigned
    sparse: true, // Allow multiple null values if this field can be empty
  },
  // Other fields...
}, {
  timestamps: true,
});

// Middleware to auto-generate user_code if not provided
userSchema.pre('save', function (next) {
  if (!this.user_code) {
    this.user_code = 'USER-' + Math.floor(100000 + Math.random() * 900000); // Generate a random user code
  }
  next();
});



module.exports = mongoose.model('User', userSchema);
