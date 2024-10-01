const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema(
  {
    po_id: { type: String, required: true },
    po_quotations_id: { type: String, required: true },
    po_date: { type: Date, required: true },
    po_owner: { type: String, required: true },
    supplier: { type: String, required: true },
    supplier_number: { type: String, required: true },
    total_cost: { type: Number, required: true },
    product_qty: { type: Number, required: true },
    action: {
      type: String,
      enum: ["View Product", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);
