const mongoose = require("mongoose");

const userPerformanceSchema = new mongoose.Schema(
  {
    user_code: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    team_head: {
      type: String,
      default: "-",
    },
    department: {
      type: String,
      required: true,
    },
    joining_date: {
      type: Date,
      required: true,
    },
    performance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserPerformance", userPerformanceSchema);
