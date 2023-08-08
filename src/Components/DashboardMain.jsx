import React, { Children } from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  const style = {
    width: "300px",
    height: "100%",
  };
  return (
    <>
      <div className="main" style={{ display: "flex" }}>
        <div className="sidebar" style={style}>
          <Dashboard />
        </div>
        <div className="contents" style={{ width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
