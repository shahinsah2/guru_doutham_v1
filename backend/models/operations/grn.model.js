const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  specifications: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  price_per_day: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  }
});

const grnSchema = new mongoose.Schema(
  {
    customer_code: {
      type: String,
      required: true
    },
    grn_number: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    phone_number: {
      type: String,
      required: true
    },
    dc_number: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    tin_number: {
      type: String
    },
    pan_number: {
      type: String
    },
    to_address: {
      company_name: { type: String, required: true },
      pincode: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      landmark: { type: String },
      street: { type: String }
    },
    person_inform: {
      informed_name: { type: String, required: true },
      phone_number_informed: { type: String, required: true },
      returned_name: { type: String },
      phone_number_returned: { type: String },
      received_name: { type: String, required: true },
      vehicle_number: { type: String, required: true },
      description: { type: String }
    },
    products: [productSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("GRN", grnSchema);
