import React, { useEffect, useState } from "react";
import useRoute from "../../hooks/useRoute";
import { useCookie } from "react-use";
import useCookieCustom from "../../hooks/useCookieCustom";

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [searchParams, setSearchParams],
  } = useRoute();
  //
    const [setCookie, getCookie] = useCookieCustom('my-cookie', '');
  //
  const handleChangle = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    //html
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    console.log(username, password);

    setCookie(username,30)
  };
  //
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login Cookie</h3>
      <div className="form-group">
        <p>Enter UserName</p>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={handleChangle}
        />
      </div>
      <div className="form-group">
        <p>Enter Password</p>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={handleChangle}
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
