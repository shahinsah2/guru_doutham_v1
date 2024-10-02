const mongoose = require("mongoose");

const clientRentSchema = new mongoose.Schema(
  {
    client_id: {
      type: String,
      required: true,
      unique: true,
    },
    customer_type: {
      type: String,
      required: true,
    },
    client_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    rental_time: {
      type: Number,
      required: true,
    },
    rental_cost: {
      type: String,
      required: true,
    },
    product_cost: {
      type: String,
      required: true,
    },
    client_status: {
      type: String,
      enum: ["On Rental", "Over"],
      default: "On Rental",
    },
    rental_start_date: {
      type: Date,
      required: true,
    },
    rental_end_date: {
      type: Date,
      required: true,
    },
    rental_return_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ClientRent", clientRentSchema);
