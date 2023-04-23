import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: false,
  },
  reducers: {
    deleteProduct: (state, action) => {
      console.log("Action", action.payload.id);
      state.products = state.products.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
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

export const { deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
