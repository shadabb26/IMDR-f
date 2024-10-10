import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = `http://localhost:8080/api/v1/users`;

export async function loginUser(data) {
  const response = await axios.post(`${BASE_URL}/login`, data);
  if (response.data.token) localStorage.setItem("token", response.data.token);
  return response;
}

export function loginToast(response) {
  return new Promise((resolve, reject) => {
    if (response && response.status === 200) {
      toast("Login Successful! Redirecting...", {
        theme: "light",
        type: "success",
        position: "top-center",
        autoClose: 2000,
        onClose: resolve,
      });
    } else {
      toast(response?.data?.message || "email or password invalid", {
        theme: "light",
        type: "error",
        position: "top-center",
        autoClose: 2000,
        onClose: reject,
      });
    }
  });
}
