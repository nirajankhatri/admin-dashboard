import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./thunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    error: false,
  },
  reducers: {
    clearUser: (state, action) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
