import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/redux/loginSlice";
import usersReducer from "./features/user/redux/usersSlice";
import productsReducer from "./features/product/redux/productsSlice";
import userReducer from "./features/user/redux/userSlice";
import productReducer from "./features/product/redux/productSlice";


const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
    products: productsReducer,
    user: userReducer,
    product: productReducer,
  },
});

export default store;
