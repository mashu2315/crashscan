import { apiConnector } from "@/lib/apiConnector"
import { endpoints } from "@/lib/endpoints"

// SEND OTP
export const sendOtpService = (email) => {
  return apiConnector("POST", endpoints.SENDOTP_API, { email })
}

// SIGNUP
export const signupService = (data) => {
  return apiConnector("POST", endpoints.SIGNUP, data)
}

// VERIFY OTP
export const verifyOtpService = (email, otp) => {
  return apiConnector("POST", endpoints.VERIFY,  email, otp )
}

// LOGIN
export const loginService = (email, password) => {
  return apiConnector("POST", endpoints.LOGIN, { email, password })
}

// FORGOT PASSWORD
export const forgotPasswordService = (email) => {
  return apiConnector("POST", endpoints.FORGOT_PASSWORD, { email })
}
