import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/redux/loginSlice";
import usersReducer from "./features/dashboard/components/users/redux/usersSlice";
import productsReducer from "./features/dashboard/components/products/redux/productsSlice";
import userReducer from "./features/dashboard/components/users/redux/userSlice";
import productReducer from "./features/dashboard/components/products/redux/productSlice";


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
