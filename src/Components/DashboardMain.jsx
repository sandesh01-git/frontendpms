import React, { Children } from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  return (
    <>
      <div className="main" style={{ display: "flex" }}>
        <div className="sidebar" style={{ width: "280px" }}>
          <Dashboard />
        </div>
        <div className="contents">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
