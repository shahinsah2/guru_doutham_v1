const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
    },
    product_image: {
      type: String,
    },
    note: {
      type: String,
      required: true,
    },
    order_no: {
      type: String,
      required: true,
    },
    order_type: {
      type: String,
      required: true,
    },
    client_id: {
      type: String,
      required: true,
    },
    client_name: {
      type: String,
    },
    service_head: {
      type: String,
      required: true,
    },
    service_staff: {
      type: [String],
    },
    priority_level: {
      type: String,
      required: true,
    },
    service_status: {
      type: String,
      required: true,
    },
    service_start_date: {
      type: Date,
      required: true,
    },
    expected_end_date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
    },
    active_status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
