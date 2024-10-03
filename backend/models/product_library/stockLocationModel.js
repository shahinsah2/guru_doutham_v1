const mongoose = require("mongoose");

const stockLocationSchema = new mongoose.Schema(
  {
    stock_location_id: {
      type: String,
      required: true,
    },
    stock_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
    },
    stock_location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StockLocationLibrary", stockLocationSchema);
