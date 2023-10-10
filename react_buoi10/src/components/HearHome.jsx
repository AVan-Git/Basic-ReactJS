//rfc
import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

export default function HearHome() {

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          React Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link action" to="/" aria-current="page">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home-reducer" aria-current="page">
                Home-Reducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/use_state">
                  Use State
                </NavLink>
                <NavLink className="dropdown-item" to="/use_effect">
                  Use Effect
                </NavLink>
                <NavLink className="dropdown-item" to="/use_text">
                  App text
                </NavLink>
                <NavLink className="dropdown-item" to="/use_callback">
                  Use call back
                </NavLink>
                <NavLink className="dropdown-item" to="/use_memo">
                  Demo use Memo
                </NavLink>
                <NavLink className="dropdown-item" to="/use_ref">
                  Demo useRef
                </NavLink>
                <NavLink className="dropdown-item" to="/custom-hook">
                  Custom - hook (useRoute)
                </NavLink>
                <NavLink className="dropdown-item" to="/animation">
                  Animation
                </NavLink>
                
                <NavLink className="dropdown-item" to="/">
                  My home
                </NavLink>
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/redux_number">
                  Demo redux number
                </NavLink>
                <NavLink className="dropdown-item" to="/redux_facebook_app">
                  Demo Facebook app
                </NavLink>
               
                
                <NavLink className="dropdown-item" to="/">
                  My home
                </NavLink>
                
              </div>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Router hook
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/hook-form">
                  Demo router navigate
                </NavLink>
                
                <NavLink className="dropdown-item" to="/">
                  My home
                </NavLink>
                
              </div>
            </li>
          </ul>
          {/* //  add chuc nang cho nut search --- su dung useSearchParam*/}
          <form className="d-flex my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault(); 
            const keyword = document.querySelector('#keyword').value;

            navigate(`/search?keyword=${keyword}`)

          }}  >
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              id="keyword"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
