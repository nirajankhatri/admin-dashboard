import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { userContext } from "../../../context/userContext";
import { logout } from "../../login/redux/thunk";

const MainHeader = () => {
  const userInfo = useContext(userContext);
  console.log(userInfo);

  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="mainHeader">
      <div className="dashboard__main__left">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard__main__right">
        <div>
          <img src={userInfo?.image} alt="Admin Profile" />
        </div>
        <select>
          <option>{userInfo?.firstName}</option>
          <option>View Profile</option>
        </select>
        <button onClick={onLogoutHandler}>Logout</button>
      </div>
    </header>
  );
};

export default MainHeader;
