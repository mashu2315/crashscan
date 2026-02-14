const Inspection = require("../models/Inspection");
const aiSim = require("../utils/aiSimulator");

exports.uploadInspection = async (req, res) => {
  const aiResult = aiSim();

  const record = await Inspection.create({
    userId: req.user.id,
    imageUrl: req.file.path,
    damageType: aiResult.damage_type,
    location: aiResult.location,
    severity: aiResult.severity,
    confidence: aiResult.confidence,
  });

  res.json({
    summary: `${aiResult.damage_type} detected on ${aiResult.location}`,
    repair_category: "bodywork",
    ...aiResult,
    record,
  });
};

exports.getHistory = async (req, res) => {
  const data = await Inspection.find({ userId: req.user.id });
  res.json(data);
};

exports.deleteRecord = async (req, res) => {
  await Inspection.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.updateRemarks = async (req, res) => {
  const record = await Inspection.findByIdAndUpdate(
    req.params.id,
    { remarks: req.body.remarks },
    { new: true }
  );
  res.json(record);
};
