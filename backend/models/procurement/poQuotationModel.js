const mongoose = require("mongoose");

const poQuotationSchema = new mongoose.Schema(
  {
    po_quotation_id: { type: String, required: true },
    quote_date: { type: Date, required: true },
    quote_owner: { type: String, required: true },
    supplier: { type: String, required: true },
    phone_number: { type: String, required: true },
    purchase_price: { type: Number, required: true },
    move_to_next: {
      type: String,
      enum: ["Pending", "Purchase Orders Created"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("POQuotation", poQuotationSchema);
