// import { toast } from "react-hot-toast"
// import { apiConnector } from "../apiConnector"
// import { profileEndpoints } from "../apis"
// import { setUser } from "../../slices/profileSlice"
// import { setToken } from "../../slices/authSlice"

// // GET PROFILE
// export function getUserProfile(token) {
//   return async (dispatch) => {
//     try {
//       const response = await apiConnector(
//         "GET",
//         profileEndpoints.GET_USER_DETAILS,
//         null,
//         { Authorization: `Bearer ${token}` }
//       )

//       if (!response.data.success) throw new Error(response.data.message)

//       dispatch(setUser(response.data.user))
//     } catch (error) {
//       console.log("GET PROFILE ERROR:", error)
//     }
//   }
// }

// // UPDATE PROFILE
// export function updateUserProfile(token, data) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Updating profile...")
//     try {
//       const response = await apiConnector(
//         "PUT",
//         profileEndpoints.UPDATE_USER_DETAILS,
//         data,
//         { Authorization: `Bearer ${token}` }
//       )

//       if (!response.data.success) throw new Error(response.data.message)

//       dispatch(setUser(response.data.user))
//       toast.success("Profile updated")
//     } catch (error) {
//       console.log("UPDATE PROFILE ERROR:", error)
//       toast.error("Update failed")
//     }
//     toast.dismiss(toastId)
//   }
// }

// // DELETE PROFILE
// export function deleteUserProfile(token, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Deleting account...")
//     try {
//       const response = await apiConnector(
//         "DELETE",
//         profileEndpoints.DELETE_USER_PROFILE,
//         null,
//         { Authorization: `Bearer ${token}` }
//       )

//       if (!response.data.success) throw new Error(response.data.message)

//       dispatch(setToken(null))
//       dispatch(setUser(null))
//       localStorage.clear()

//       toast.success("Account deleted")
//       navigate("/")
//     } catch (error) {
//       console.log("DELETE PROFILE ERROR:", error)
//       toast.error("Delete failed")
//     }
//     toast.dismiss(toastId)
//   }
// }

import { apiConnector } from "@/lib/apiConnector"
import { profileEndpoints } from "@/lib/endpoints"

// GET PROFILE
export const getUserProfileService = () => {
  return apiConnector(
    "GET",
    profileEndpoints.GET_USER_DETAILS,
    null,
    {}
  )
}

// UPDATE PROFILE
export const updateUserProfileService = (data) => {
  return apiConnector(
    "PUT",
    profileEndpoints.UPDATE_USER_DETAILS,
    data,
    {}
  )
}

// DELETE PROFILE
export const deleteUserProfileService = () => {
  return apiConnector(
    "DELETE",
    profileEndpoints.DELETE_USER_PROFILE,
    null,
    {}
  )
}
