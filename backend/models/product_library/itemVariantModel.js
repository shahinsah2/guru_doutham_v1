const mongoose = require("mongoose");

const itemVariantSchema = new mongoose.Schema(
  {
    sl_no: {
      type: Number,
      required: true,
      unique: true,
    },
    item_type: {
      type: String,
      required: true,
    },
    specification_name: {
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

module.exports = mongoose.model("ItemVariant", itemVariantSchema);
