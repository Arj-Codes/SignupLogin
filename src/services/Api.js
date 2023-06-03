import { commonrequest } from "./Apicalls";
import { BACKEND_URL } from "./helper";

export const userSignup = async(data)=>{
  return await commonrequest("POST", `${BACKEND_URL}/api/user/signup`,data)
}
export const sendOtp = async(data)=>{
  return await commonrequest("PUT", `${BACKEND_URL}/api/user/otp`,data)
}

export const getuserdets = async(id)=>{
  return await commonrequest("GET", `${BACKEND_URL}/api/user/userotp/${id}`)
}

export const updateVerified = async(id) => {
  return await commonrequest("PUT", `${BACKEND_URL}/api/user/verification/${id}`)
}