import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ReactForm() {
  const navigate = useNavigate();

  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;

    userLoginRef.current[id] = value;
    console.log(
      "🚀 ~ file: ReactForm.jsx:17 ~ handleChange ~ userLoginRef:",
      userLoginRef.current
    );
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit -  ", userLoginRef.current);

    //mo ta su dung api
    let promise = new Promise((resolve, fail) => {
      console.log("promise");
      setTimeout(() => {
        if (userLoginRef.current.userName == "cybersoft") {
          console.log("Đăng nhập api");
          resolve("Đăng nhập thành công");
        } else {
          fail("tai khoan khong dung !!");
        }
      }, 3000);
    });

    // let result = await promise;
    // se chay khi fun - resolve ddược gọi
    promise.then((result) => {
      console.log("35 - " + result);

      navigate("/profile");
    });

    // se chay khi fun - fail ddược gọi
    promise.catch((error) => {
      console.log("handleSubmit -- " + error);

      navigate("/error");
    });
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <p>username</p>
          <input
            type="text"
            className="form-control"
            id="userName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <p>password</p>
          <input
            type="password"
            className="form-control"
            id="passWord"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit" class="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
