import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubmitAction } from "../../../redux/reducers/modalReducer";

export default function CreateUser(props) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password:''
    },
    onSubmit: (value) => {
      console.log("🚀 ~ file: CreateUser.jsx:10 ~ CreateUser ~ value:", value)
      
    } 
  });

const dispatch = useDispatch();

  useEffect(()=> {
    const action = setSubmitAction(formik.handleSubmit);

    dispatch(action);
  }, [])


  return (
    <form>
      <div className="form-group" onSubmit={formik.handleSubmit}>
        <p>Id</p>
        <input type="text" name="id" id="id" className="form-control" />
      </div>

      <div className="form-group">
        <p>Username</p>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          onChange={formik.handleChange}
        />
      </div>

      <div className="form-group">
        <p>Password</p>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control"
          onChange={formik.handleChange}
        />
      </div>

      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">
          Create
        </button>
        <button type="reset" className="btn btn-secondary mx-2">
          Clear
        </button>
      </div>
    </form>
  );
}
