import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(
    "https://admin-dashboard-993e9-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
  );
  return data;
});

export const fetchUser = createAsyncThunk("user/fetchUser", async (id) => {
  const { data } = await axios.get(
    `https://admin-dashboard-993e9-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`
  );
  return data;
});