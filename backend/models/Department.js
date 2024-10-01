const mongoose = require("mongoose");

// Define the Department schema
const departmentSchema = new mongoose.Schema(
  {
    department_name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true, 
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Department", departmentSchema);
