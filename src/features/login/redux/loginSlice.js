import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState: { loading: false, userInfo: null, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.userInfo = null;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
