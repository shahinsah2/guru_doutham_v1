const mongoose = require("mongoose");

// Define the Service Priority Level schema
const servicePrioritySchema = new mongoose.Schema(
  {
    priority_level: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High"], // or you can make this dynamic
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true, // Active by default
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("ServicePriority", servicePrioritySchema);
