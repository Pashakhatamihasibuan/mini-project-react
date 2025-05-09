import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";
const API_KEY = "reqres-free-v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
});

export const registerUser = async (email, password) => {
  try {
    const response = await api.post("/register", {
      email,
      password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || "Registration failed",
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || "Login failed",
    };
  }
};

export const getUsers = async (page = 1) => {
  try {
    const response = await api.get(`/users?page=${page}`);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || error.message,
    };
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || error.message,
    };
  }
};
