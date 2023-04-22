import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "login/login",
  async ({ username, password }) => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  }
);

export const logout = createAsyncThunk(
  "login/logout",
  async () => {
    localStorage.removeItem("userInfo");
  }
);