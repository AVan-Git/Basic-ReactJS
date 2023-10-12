import React from "react";
import { setModalAction } from "../../../redux/reducers/modalReducer";
import Login from "../../Login/Login";
import { useDispatch } from "react-redux";
import CreateProduct from "./CreateProduct";

export default function ProductManagement(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target={`#modalID`}
        onClick={() => {
          const action = setModalAction({
            Component: CreateProduct,
            title: "Create Product",
          });

          dispatch(action);
        }}
      >
        Create Product
      </button>
    </div>
  );
}
