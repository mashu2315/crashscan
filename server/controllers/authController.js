const User = require("../models/User");
const bcrypt = require("bcryptjs");
const otpTemplate = require("../email-templates/otpTemplate");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const otp = generateOTP();

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    otp,
    otpExpires: Date.now() + 10 * 60 * 1000, // 10 minutes
  });

  await sendEmail(email, "Verify your account", otpTemplate(name, otp));

  res.json({
    success: true,
    message: "OTP sent to email for verification",
  });
};

// exports.verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) return res.status(404).json({ message: "User not found" });

//   if (user.otp !== otp || user.otpExpires < Date.now()) {
//     return res.status(400).json({ message: "Invalid or expired OTP" });
//   }

//   user.otp = null;
//   user.otpExpires = null;
//   await user.save();

//   res.json({
//     success: true,
//     message: "Account verified successfully",
//   });
// };


// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: "User not found" });

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(400).json({ message: "Wrong password" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   res.json({ token });
// };

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body; // ✅ extract properly

    console.log("EMAIL:", email); // debug
    console.log("OTP:", otp);

    const user = await User.findOne({ email: email }); // ✅ MUST be string

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    return res.json({
      success: true,
      message: "Account verified successfully",
    });

  } catch (error) {
    console.error("Verify OTP error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true in production with HTTPS
  });

  res.json({
    success: true,
    token,
    message: "Login successful",
  });
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    return res.json({ success: true, message: "Logged out" });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Logout failed" });
  }
};

// exports.forgotPassword = async (req, res) => {
//   const token = crypto.randomBytes(20).toString("hex");
//   await User.findOneAndUpdate({ email: req.body.email }, { resetToken: token });
//   res.json({ message: "Reset token generated", token });
// };

exports.forgotPassword = async (req, res) => {
  const token = crypto.randomBytes(20).toString("hex");

  const user = await User.findOneAndUpdate(
    { email: req.body.email },
    { resetToken: token, resetTokenExpires: Date.now() + 15 * 60 * 1000 }
  );

  if (!user) return res.status(404).json({ message: "User not found" });

  await sendEmail(
    req.body.email,
    "Reset your password",
    `Your reset token is: ${token}`
  );

  res.json({ success: true, message: "Reset token sent to email" });
};
