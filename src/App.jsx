import React from "react";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import DashboardMain from "./Components/DashboardMain";

import Product from "./Components/product";
import UserList from "./Components/UserList";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/products" element={<Product />} />
            <Route path="/dashboard/userLists" element={<UserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
