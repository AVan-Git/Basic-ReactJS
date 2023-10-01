import React, { useRef, useState } from "react";

function UseRefDemo() {
  const [number, setNumber] = useState(1);
  console.log("🚀 ~ file: UseRefDemo.jsx:5 ~ UseRefDemo ~ number:", number)

//   const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  const userLoginRef = useRef({ username: "", password: "" });
  console.log("🚀 ~ file: UseRefDemo.jsx:10 ~ UseRefDemo ~ userLoginRef:", userLoginRef)

  const handleChangeInput = (e) => {
    let { id, value } = e.target;
    // setUserLogin({ ...userLogin, [id]: value });

    userLoginRef.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // chan sk reload

    console.log("user -- " + userLoginRef.current.username + userLoginRef.current.password);
  };
  return (
    <div className="container">
      <h2>UseRefDemo</h2>
      <hr />
      Number: {number}
      <button
        onClick={() => {
          setNumber( 1+number );
        }}
        type="button"
        className="btn btn-primary"
      >
        add number
      </button>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-group">
          <input
            type="text"
            className="form-control"
            name
            id="username"
            aria-describedby="helpId"
            placeholder="User name"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3 form-group">
          <input
            type="password"
            className="form-control"
            name
            id="password"
            aria-describedby="helpId"
            placeholder="Password"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3 form-group">
          <button type="submit" class="btn btn-success">
            Login
          </button>
          <button type="reset" class="btn btn-secondary mx-2">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default UseRefDemo;
