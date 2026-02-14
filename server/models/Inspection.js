const mongoose = require("mongoose");

const inspectionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    imageUrl: String,
    damageType: String,
    location: String,
    severity: String,
    confidence: Number,
    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inspection", inspectionSchema);
