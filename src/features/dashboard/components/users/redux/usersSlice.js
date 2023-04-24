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
      console.log("del Action", action.payload.id);
      state.users = state.users.filter((item) => item.id != action.payload.id);
    },
    editUser: (state, action) => {
      state.users.forEach((user) => {
        if (user.id == action.payload.id) {
          user.firstName = action.payload.firstName;
          user.lastName = action.payload.lastName;
          user.gender = action.payload.gender;
          user.age = action.payload.age;
        }
      });
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

export const { deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
