import axios from "axios"
import Cookies from "js-cookie"

export const axiosInstance = axios.create({
  withCredentials: true,  
});

// Add response interceptor to handle unauthorized requests
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Token is invalid or expired
      Cookies.remove('token');
      
      // Redirect to login page
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
    try {
      return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
         withCredentials: true,
    });
    } catch (err){
      console.log("Error in api-connnector", err);
      return Promise.reject(err);
    }
}
