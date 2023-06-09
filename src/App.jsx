import { useEffect } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchProducts } from "./features/dashboard/components/products/redux/thunks";
import { fetchUsers } from "./features/dashboard/components/users/redux/thunks";

import ProtectedRoute from "./HOC/ProtectedRoute";
import Dashboard from "./features/dashboard";

import { userContext } from "./context/userContext";
import LoginForm from "./features/login";
import UserList from "./features/dashboard/components/users";
import Reports from "./features/dashboard/components/reports";
import ProductList from "./features/dashboard/components/products";
import UserEditForm from "./features/dashboard/components/users/components/UserEditForm";
import ProductEditForm from "./features/dashboard/components/products/components/ProductEditForm";
import Charts from "./features/dashboard/components/charts";
import Profile from "./features/dashboard/components/users/components/Profile";
import ProductDetails from "./features/dashboard/components/products/components/ProductDetails";

function App() {
  let { userInfo } = useSelector((state) => state.login);

  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  if (!userInfo) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUsers());
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <userContext.Provider value={userInfo}>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoute user={userInfo} />}>
            <Route path="/" element={<Dashboard />} user={userInfo}>
              <Route
                path="/"
                element={<Charts />}
              />
              <Route path="user/profile/:id" element={<Profile />} />
              <Route path="user/edit/:id" element={<UserEditForm />} />
              <Route path="users" element={<UserList />} />

              <Route path="product/details/:id" element={<ProductDetails />} />

              <Route path="product/edit/:id" element={<ProductEditForm />} />
              <Route
                path="products"
                element={<ProductList />}
              />
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
