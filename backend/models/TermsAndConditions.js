const mongoose = require("mongoose");

// Define the Terms and Conditions schema
const termsAndConditionsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    transactionType: {
      type: String,
      required: true,
      trim: true,
    },
    points: {
      type: [String], // Array of points
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TermsAndConditions", termsAndConditionsSchema);
