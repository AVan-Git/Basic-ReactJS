import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { signinApi } from "../../redux/reducers/userReducer";

export default function Login(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{ // de ten gia gi ban dau giong vs name="?"
            email:'',
            password:'',
        },
        validationSchema:Yup.object().shape({
            // dịnh nghĩa các validation cho cac trừờng naof
            // .matches() kiem tra regex
            email: Yup.string().required("Email không được bỏ trống!").email('Email không dúng định dạng !') ,
            password: Yup.string().required("Password không được bỏ trống!").min(3, 'Password từ 3 - 32 ký tự !')
                .max(32,'Password từ 3 - 32 ký tự !')
                //.matches(/Avan/, 'Password phải có từ Avan')
        })
        ,
        onSubmit:(values) => {
            console.log("🚀 ~ file: Login.jsx:12 ~ Login ~ values:", values)
            
            const action = signinApi(values)
            dispatch(action);

        }
    });
    // console.log("🚀 ~ file: Login.jsx:7 ~ Login ~ formik:", formik)

  return (
    <form className="container" style={{ textAlign: "left" }} onSubmit={formik.handleSubmit}>
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <small id="errEmail" className="form-text text-danger ms-2">
          {formik.errors.email? formik.errors.email:'' }
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small id="errPassword" className="form-text text-danger ms-2">
        {formik.errors.password? formik.errors.password:'' }
        </small>
      </div>
      <div className="form-group">
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <button type="reset" onClick={()=> {
            console.log('khaido@gmail.com - 123');
        }} class="btn btn-secondary mx-2">
          Clear
        </button>
      </div>

      <button type="button" onClick={()=> {
            alert('khaido@gmail.com - 123');
        }} class="btn btn-secondary my-2">
          account
        </button>
    </form>
  );
}
