const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    customerID: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    customerType: {
      type: String,
      required: true,
    },
    companyName: String,
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      pincode: String,
      country: String,
      state: String,
      city: String,
      street: String,
      landmark: String,
    },
    bankDetails: {
      bankName: String,
      bankAddress: String,
      accountNumber: String,
      panNumber: String,
      contactPerson: String,
      contactPhoneNumber: String,
      otherDetails: String,
    },
    owner: {
      type: String,
      required: true,
    },
    contactGeneratedBy: {
      type: String,
      required: true,
    },
    remarks: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
