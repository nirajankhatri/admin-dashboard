import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products"
    );
    return data.products;
  }
);

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/${id}`
    );
    return data;
  }
);
