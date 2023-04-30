import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavToggle from "../../../components/NavToggle";
import { userContext } from "../../../context/userContext";
import { logout } from "../../login/redux/thunk";

const MainHeader = () => {
  const userInfo = useContext(userContext);

  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="mainHeader">
      <div className="dashboard-main-left">
        {/* <NavToggle /> */}

        <h3>Dashboard</h3>
      </div>
      <div className="dashboard-main-right">
        <div
          className="dropDownContainer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <div className="dropDownBtn">
            <div className="imageContainer">
              <img src={userInfo?.image} alt="Admin Profile" />
            </div>
          </div>

          <div className="nameContainer">
            <p>{userInfo?.firstName} &#10576;</p>
          </div>
          <div
            className="dropDownList"
            style={{ display: showDropdown ? "block" : "none" }}
          >
            <div onClick={() => navigate(`user/profile/${userInfo?.id}`)}>
              Profile
            </div>
            <div onClick={onLogoutHandler}>Logout</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
