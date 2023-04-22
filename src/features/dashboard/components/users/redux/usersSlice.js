import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
