import React from "react";
import ReactDOM from "react-dom/client";
import "./asset/scss/style.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";

// cấu hình các route - dom

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="carts" element={<Cart />}></Route>

        <Route path="*" element={<Navigate to={""} />}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);
