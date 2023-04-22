import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./thunks";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: {},
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.product = {};
        state.error = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.product = {};
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
