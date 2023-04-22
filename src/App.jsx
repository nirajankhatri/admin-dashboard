import { useEffect } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {
  fetchProduct,
  fetchProducts,
} from "./features/dashboard/components/products/redux/thunks";
import {
  fetchUser,
  fetchUsers,
} from "./features/dashboard/components/users/redux/thunks";

import ProtectedRoute from "./HOC/ProtectedRoute";
import Dashboard from "./features/dashboard";

import { userContext } from "./context/userContext";
import LoginForm from "./features/login";
import UserList from "./features/dashboard/components/users";
import Reports from "./features/dashboard/components/reports";
import ProductList from "./features/dashboard/components/products";

function App() {
  let { userInfo } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  if (!userInfo) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
    dispatch(fetchUser(0));
    dispatch(fetchProduct(0));
  }, []);

  return (
    <userContext.Provider value={userInfo}>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoute user={userInfo} />}>
            <Route path="/" element={<Dashboard />} user={userInfo}>
              <Route path="users" element={<UserList />} />
              <Route path="products" element={<ProductList />} />
              <Route path="reports" element={<Reports />} />
            </Route>
          </Route>
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
