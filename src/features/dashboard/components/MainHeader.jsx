import React, { useContext } from "react";
import { userContext } from "../../../context/userContext";

const MainHeader = () => {
  const userInfo = useContext(userContext);
  console.log(userInfo);
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
          <option>Logout</option>
        </select>
      </div>
    </header>
  );
};

export default MainHeader;
