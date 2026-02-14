const otpTemplate = (name, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Welcome to Vehicle Damage Detection System</h2>
      <p>Hello <b>${name}</b>,</p>
      <p>Your OTP for account verification is:</p>
      <h1 style="color: #2563eb;">${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
      <br/>
      <p>Regards,</p>
      <p><b>AI Vehicle Damage Detection Team</b></p>
    </div>
  `;
};

module.exports = otpTemplate;
