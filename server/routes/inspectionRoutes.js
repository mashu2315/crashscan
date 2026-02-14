const router = require("express").Router();
const multer = require("multer");
const protect = require("../middleware/authMiddleware");
const { storage } = require("../config/cloudinary");
const upload = multer({ storage });

const {
  uploadInspection,
  getHistory,
  deleteRecord,
  updateRemarks,
} = require("../controllers/inspectionController");

router.post("/upload", protect, upload.single("image"), uploadInspection);
router.get("/history", protect, getHistory);
router.delete("/:id", protect, deleteRecord);
router.put("/:id", protect, updateRemarks);

module.exports = router;
