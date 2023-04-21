import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.products = [];
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
