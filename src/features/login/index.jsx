import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton";
import Spinner from "../../components/Spinner";
import { login } from "./redux/thunk";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });


  let { loading, userInfo, error } = useSelector((state) => state.login);

  if (!userInfo) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  const dispatch = useDispatch();

  if (userInfo) {
    return <Navigate to="/" />;
  }

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({ username: formValues.username, password: formValues.password })
    );
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="loginFormContainer">
      {loading ? (
        <Spinner />
      ) : (
        <form className="loginForm" onSubmit={loginHandler}>
          <div className="loginForm-input">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={changeHandler}
              placeholder="Username"
            />
          </div>
          <div className="loginForm-input">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={formValues.password}
              onChange={changeHandler}
              placeholder="Password"
            />
          </div>
          <CTAButton label="Login" onClickHandler={loginHandler} />
        </form>
      )}
    </div>
  );
};

export default LoginForm;
