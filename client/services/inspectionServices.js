import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { inspectionEndpoints } from "../apis"
import { setLoading } from "../../slices/authSlice"

// UPLOAD IMAGE
export function uploadInspection(formData, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Uploading image...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector(
        "POST",
        inspectionEndpoints.UPLOAD_INSPECTION,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )

      if (!response.data.success) throw new Error(response.data.message)

      toast.success("Inspection complete")
      navigate("/inspection/result")
    } catch (error) {
      console.log("UPLOAD ERROR:", error)
      toast.error("Upload failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

// GET HISTORY
export function getInspectionHistory(token, setHistory) {
  return async () => {
    try {
      const response = await apiConnector(
        "GET",
        inspectionEndpoints.GET_HISTORY,
        null,
        { Authorization: `Bearer ${token}` }
      )

      if (!response.data.success) throw new Error(response.data.message)

      setHistory(response.data.data)
    } catch (error) {
      console.log("GET HISTORY ERROR:", error)
    }
  }
}

// DELETE RECORD
export function deleteInspectionRecord(id, token) {
  return async () => {
    try {
      const response = await apiConnector(
        "DELETE",
        inspectionEndpoints.DELETE_RECORD + id,
        null,
        { Authorization: `Bearer ${token}` }
      )

      if (!response.data.success) throw new Error(response.data.message)

      toast.success("Record deleted")
    } catch (error) {
      console.log("DELETE RECORD ERROR:", error)
      toast.error("Delete failed")
    }
  }
}

// UPDATE REMARKS
export function updateInspectionRemarks(id, remarks, token) {
  return async () => {
    try {
      const response = await apiConnector(
        "PUT",
        inspectionEndpoints.UPDATE_REMARKS + id,
        { remarks },
        { Authorization: `Bearer ${token}` }
      )

      if (!response.data.success) throw new Error(response.data.message)

      toast.success("Remarks updated")
    } catch (error) {
      console.log("UPDATE REMARKS ERROR:", error)
      toast.error("Update failed")
    }
  }
}
