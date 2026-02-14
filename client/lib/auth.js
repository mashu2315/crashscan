import { apiConnector } from "./apiConnector"
import { endpoints } from "./endpoints"

export const signupService = async (data) => {
  return apiConnector("POST", endpoints.SIGNUP, data)
}

export const verifyOtpService = async (email, otp) => {
  return apiConnector("POST", endpoints.VERIFY, { email, otp })
}
