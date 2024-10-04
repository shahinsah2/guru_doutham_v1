const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    supplier_number: { type: String, required: true, unique: true },
    regd_date: { type: Date, required: true },
    supplier_name: { type: String, required: true },
    supplier_owner: { type: String, required: true },
    vat_number: { type: String },
    cst_number: { type: String, required: true },
    supplier_introduced_by: { type: String },
    supplier_tags: { type: [String], required: true },
    comments: { type: String },
    address_line1: { type: String, required: true },
    address_line2: { type: String },
    pincode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    telephone1: { type: String, required: true },
    telephone2: { type: String },
    fax: { type: String },
    website: { type: String },
    email: { type: String, required: true },
    bank_name: { type: String, required: true },
    bank_address: { type: String },
    account_number: { type: String, required: true },
    pan_number: { type: String, required: true },
    contact_person_bank: { type: String, required: true },
    contact_person_bank_phone: { type: String, required: true },
    contact_details: [
      {
        contact_name: { type: String, required: true },
        designation: { type: String },
        mobile_number: { type: String, required: true },
        email: { type: String, required: true },
        landline: { type: String },
        landline_ext: { type: String },
        memo: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
