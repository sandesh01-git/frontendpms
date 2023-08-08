import React from "react";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardMain from "./Components/DashboardMain";

import UserDetails from "./Components/UserDetails";

import AdminProducts from "./Components/AdminProducts";
import Categories from "./Components/Categories";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route path="/dashboard/" element={<UserDetails />} />
            <Route path="/dashboard/products" element={<AdminProducts />} />
            <Route
              path="/dashboard/category/:id"
              element={<Categories></Categories>}
            ></Route>
            <Route
              path="/dashboard/products/:id"
              element={<Products />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
