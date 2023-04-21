import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import SideNav from "./components/SideNav";

const Dashboard = ({ user }) => {
  useEffect(() => {
    if (!user) {
      <Navigate to="login" />;
    }
  });

  return (
    <div className="dashboard">
      <SideNav />
      <main>
        <MainHeader />
      </main>
    </div>
  );
};

export default Dashboard;
