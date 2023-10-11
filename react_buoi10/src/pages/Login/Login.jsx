import React from "react";

export default function Login(props) {
  return (
    <form className="container" style={{ textAlign: "left" }}>
      <h3 className="text-center text-danger">Login</h3>

      <div className="mb-3 form-group">
        <label htmlFor="email" className="form-label ms-2">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="errEmail"
          placeholder="Enter email..."
        />
        <small id="errEmail" className="form-text text-muted ms-2">
          Help text
        </small>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="password" className="form-label ms-2">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          aria-describedby="errPassword"
          placeholder="Enter Password..."
        />
        <small id="errPassword" className="form-text text-muted ms-2">
          Help text
        </small>
      </div>
      <div className="form-group">
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <button type="reset" class="btn btn-secondary mx-2">
          Clear
        </button>
      </div>
    </form>
  );
}
