const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { getProfile, updateProfile, deleteAccount } = require("../controllers/userController");

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.delete("/profile", protect, deleteAccount);

module.exports = router;
