import { useContext, useEffect } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchProduct, fetchProducts } from "./features/product/redux/thunks";
import { fetchUser, fetchUsers } from "./features/user/redux/thunks";

import ProtectedRoute from "./HOC/ProtectedRoute";
import LoginPage from "./pages/login";
import Dashboard from "./features/dashboard";

import { userContext } from "./context/userContext";

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
            <Route path="/" element={<Dashboard />} user={userInfo} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
