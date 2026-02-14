const BASE_URL = "http://localhost:4000/api"

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP: BASE_URL + "/auth/signup",
  LOGIN: BASE_URL + "/auth/login",
  VERIFY: BASE_URL + "/auth/verify-otp",
  FORGOT_PASSWORD: BASE_URL + "/auth/forgot-password",
  LOGOUT: BASE_URL + "/auth/logout",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS: BASE_URL + "/user/profile",
  UPDATE_USER_DETAILS: BASE_URL + "/user/profile",
  DELETE_USER_PROFILE: BASE_URL + "/user/profile",
}

// INSPECTION ENDPOINTS
export const inspectionEndpoints = {
  UPLOAD_INSPECTION: BASE_URL + "/inspection/upload",
  GET_HISTORY: BASE_URL + "/inspection/history",
  DELETE_RECORD: BASE_URL + "/inspection/",
  UPDATE_REMARKS: BASE_URL + "/inspection/",
}
