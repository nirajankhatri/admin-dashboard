import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/users"
  );
  return data.users;
});

export const fetchUser = createAsyncThunk("user/fetchUser", async (id) => {
  const { data } = await axios.get(
    `https://dummyjson.com/users/${id}`
  );
  return data;
});