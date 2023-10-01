import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import './asssets/scss/style.scss'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/UseRefDemo/UseRefDemo";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/UseRedux/DemoNumber/DemoNumber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="use_state" element={<UseStateDemo />}></Route>
          <Route path="use_effect" element={<UseEffectDemo />}></Route>
          <Route path="use_callback" element={<UseCallBackDemo />}></Route>
          <Route path="use_memo" element={<UseMemoDemo />}></Route>
          <Route path="use_ref" element={<UseRefDemo />}></Route>
          <Route path="redux_number" element={<DemoNumber />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
