const mongoose = require("mongoose");

const clientJourneySchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    }, // Foreign key to Client

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
    }, // Foreign key to Lead

    quotation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
    }, // Foreign key to Quotation

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    }, // Foreign key to Order

    dc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DC",
    }, // Foreign key to Delivery Challan

    grn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GRN",
    }, // Foreign key to Goods Receipt Note
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ClientJourney", clientJourneySchema);
