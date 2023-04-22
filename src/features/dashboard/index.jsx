import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
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
        {<Outlet /> ? <Outlet /> : <h2>Charts</h2>}
      </main>
    </div>
  );
};

export default Dashboard;
