const mongoose = require("mongoose");

const purchaseRequestSchema = new mongoose.Schema(
  {
    pr_id: { type: String, required: true },
    pr_date: { type: Date, required: true },
    pr_owner: { type: String, required: true },
    supplier: { type: String, required: true },
    total_product_qty: { type: Number, required: true },
    approve_status: {
      type: String,
      enum: ["Approved", "Pending", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseRequest", purchaseRequestSchema);
