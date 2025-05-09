import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
});

// Auth
export const loginUser = async (data) => {
  return await api.post("/api/login", data);
};

export const registerUser = async (data) => {
  return await api.post("/api/register", data);
};

// Users
export const getUsers = async (page = 1) => {
  return await api.get(`/api/users?page=${page}`);
};

export const getUserDetail = async (id) => {
  return await api.get(`/api/users/${id}`);
};
