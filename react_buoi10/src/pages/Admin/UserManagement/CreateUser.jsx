import React from "react";

export default function CreateUser(props) {
  return (
    <form>
      <div className="form-group">
        <p>Id</p>
        <input type="text" name="id" id="id" className="form-control" />
      </div>

      <div className="form-group">
        <p>Username</p>
        <input type="text" name="username" id="username" className="form-control" />
      </div>


      <div className="form-group">
        <p>Password</p>
        <input type="text" name="password" id="password" className="form-control" />
      </div>

      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">Create</button>
        <button type="reset" className="btn btn-secondary mx-2">Clear</button>
      </div>
    </form>
  );
}
