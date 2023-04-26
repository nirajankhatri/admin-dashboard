import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./thunks";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: null,
    error: false,
  },
  reducers: {
    clearProduct: (state, action) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.product = null;
        state.error = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.product = null;
        state.error = action.payload;
      });
  },
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
