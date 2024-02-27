import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HomeTemplateMobile() {
  return (
    <>
      <Outlet />
      <div className="postition-fixed bottom-0 w-100 start-0 bg-dark">
        <div className="d-flex justify-content-between">
            <NavLink to={''}>
                <i className="fa fa-home"></i>
                Home
            </NavLink>
            <NavLink to={''}>
                <i className="fa fa-home"></i>
                Home
            </NavLink>
        </div>
      </div>
    </>
  );
}
