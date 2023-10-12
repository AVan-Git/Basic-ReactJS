import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClearAction, setSubmitAction } from "../../../redux/reducers/modalReducer";

export default function CreateProduct(props) {

    const  formik = useFormik({
        initialValues: {
            name:'',
            price:'',
        },
        onSubmit: (value) => {
            console.log("🚀 ~ file: CreateProduct.jsx:12 ~ CreateProduct ~ value:", value)
        },
        // onReset: (value)
    })

    const dispatch = useDispatch();
    useEffect(()=>{
        const action = setSubmitAction(formik.handleSubmit)

        dispatch(action);
        
    }, [])

  return (
    <form>
      <div className="form-group" onSubmit={formik.handleSubmit}>
        <p>Id</p>
        <input type="text" name="id" id="id" className="form-control" />
      </div>

      <div className="form-group">
        <p>Name</p>
        <input type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" />
      </div>

      <div className="form-group">
        <p>price</p>
        <input type="number" name="price" onChange={formik.handleChange} onBlur={formik.handleBlur} id="price" className="form-control" />
      </div>

      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">Create</button>
        <button type="reset" className="btn btn-secondary mx-2">Clear</button>
      </div>
    </form>
  );
}
