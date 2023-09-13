import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Page404 from "./Page/Page404/Page404";
import Contact from "./Page/Contact/Contact";
import DemoTangGiamSoLuong from "./Page/DemoRedux/DemoTangGiamSoLuong/DemoTangGiamSoLuong";
import About from "./Page/About/About";

// cài đặt Redux
import { Provider } from "react-redux";
import { store } from "./Redux/ConfigStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/reduxNumber" element={<DemoTangGiamSoLuong />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
