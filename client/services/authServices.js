import { apiConnector } from "@/lib/apiConnector"
import { endpoints } from "@/lib/endpoints"

// SIGNUP
export const signupService = (data) => {
  return apiConnector("POST", endpoints.SIGNUP, data)
}

// VERIFY OTP
export const verifyOtpService = (data) => {
  return apiConnector("POST", endpoints.VERIFY,  {
      email: data.email,
      otp: data.otp} )
}

// LOGIN
export const loginService = (email, password) => {
  return apiConnector("POST", endpoints.LOGIN, { email, password })
}

import { endpoints as apiEndpoints } from "@/lib/endpoints"

export const logoutService = () => {
  return apiConnector("POST", apiEndpoints.LOGOUT, null)
}

// FORGOT PASSWORD
export const forgotPasswordService = (email) => {
  return apiConnector("POST", endpoints.FORGOT_PASSWORD, { email })
}
