const express = require("express");
const { signup, verifyOtp, login, forgotPassword, logout } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/logout", logout);

module.exports = router;
