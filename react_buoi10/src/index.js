import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import './asssets/scss/style.scss'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/UseRefDemo/UseRefDemo";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/UseRedux/DemoNumber/DemoNumber";
import DemoFacebookApp from "./pages/UseRedux/DemoFacebookApp/DemoFacebookApp";
import ReactForm from "./pages/HookRouters/ReactForm/ReactForm";
import Profile from "./pages/HookRouters/ReactForm/Profile";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/PageSearch/Search";
import DemoUseRoute from "./pages/DemoUseRoute/DemoUseRoute";
import DemoAnimation from "./pages/DemoAnimation/DemoAnimation";
import HomeReducer from "./pages/Home/HomeReducer";
import DetailRedux from "./pages/Detail/DetailRedux";
import Login from "./pages/Login/Login";

// tao ra mot bien  de quan ly chuyen huong trang
// add lib History  của router giup chuyển trang khi k đứng ở component
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DemoHOC from "./pages/DemoHOC/DemoHOC";
import AdminTemplate from "./templates/AdminTemplate";
import UserManagement from "./pages/Admin/UserManagement/UserManagement";
import ProductManagement from "./pages/Admin/ProductManagement/ProductManagement";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="home-reducer" element={<HomeReducer />}></Route>
            <Route path="detail">
              <Route path=":id" element={<Detail />}></Route>
            </Route>
            <Route path="detail-redux">
              <Route path=":id" element={<DetailRedux />}></Route>
            </Route>
            <Route path="use_state" element={<UseStateDemo />}></Route>
            <Route path="use_effect" element={<UseEffectDemo />}></Route>
            <Route path="use_callback" element={<UseCallBackDemo />}></Route>
            <Route path="use_memo" element={<UseMemoDemo />}></Route>
            <Route path="use_ref" element={<UseRefDemo />}></Route>
            <Route path="redux_number" element={<DemoNumber />}></Route>
            <Route
              path="redux_facebook_app"
              element={<DemoFacebookApp />}
            ></Route>
            <Route path="hook-form" element={<ReactForm />}></Route>
            <Route path="hook-profile" element={<Profile />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="custom-hook" element={<DemoUseRoute />}></Route>
            <Route path="animation" element={<DemoAnimation />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="demo-HOC" element={<DemoHOC />}></Route>


            {/* <Route path="*" element={<Navigate to={"/"} />}></Route> */}
          </Route> 

          
          <Route path="/admin/users" element={<AdminTemplate Compoment={UserManagement } />} ></Route>
          <Route path="/admin/products" element={<AdminTemplate Compoment={ProductManagement } />} ></Route>
        </Routes>
      {/* </BrowserRouter> */}
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
