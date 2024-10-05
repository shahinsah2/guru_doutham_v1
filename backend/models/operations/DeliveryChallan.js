const mongoose = require("mongoose");

const deliveryChallanSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Customer",
      required: true,
    },
    customer_code: {
      type: String,
    },
    quotation_number: {
      type: String,
      required: true,
    },
    order_number: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    other_reference: {
      type: String,
    },
    TIN: {
      type: String,
      required: true,
    },
    PAN: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },
    attach_dc: {
      type: String, // Store file path for attached DC
    },
    shipping_details: {
      order_placed_by: { type: String, required: true },
      mobile_number: { type: String, required: true },
      shipping_name: { type: String, required: true },
      shipping_address: { type: String, required: true },
      pincode: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    other_details: {
      vehicle_number: { type: String, required: true },
      delivered_staff: { type: String },
      received_name: { type: String },
      receiver_mobile_number: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryChallan", deliveryChallanSchema);
