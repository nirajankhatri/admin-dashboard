import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: false,
  },
  reducers: {
    deleteUser: (state, action) => {
      console.log("Action", action.payload.id);
      state.users = state.users.filter((item) => item.id != action.payload.id);
    },
  },
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

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
