import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";
import { logout } from "../../login/redux/thunk";

const MainHeader = () => {
  const userInfo = useContext(userContext);
  console.log(userInfo);

  const [showDropdown, setShowDropdown] = useState(false);

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
        {/* <select>
          <option>{userInfo?.firstName}</option>
          <option>View Profile</option>
        </select> */}
        {/* <button onClick={onLogoutHandler}>Logout</button> */}

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
            <div>
              <Link>Profile</Link>
            </div>
            <div onClick={onLogoutHandler}>Logout</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
