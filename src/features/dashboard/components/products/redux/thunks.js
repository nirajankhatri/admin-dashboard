import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(
      "https://admin-dashboard-993e9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    return data;
  }
);

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const { data } = await axios.get(
      `https://admin-dashboard-993e9-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`
    );
    return data;
  }
);
