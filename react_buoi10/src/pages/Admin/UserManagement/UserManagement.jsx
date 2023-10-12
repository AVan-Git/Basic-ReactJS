import React from "react";
import { useDispatch } from "react-redux";
import { setModalAction } from "../../../redux/reducers/modalReducer";
import CreateUser from "./CreateUser";

export default function UserManagement(props) {
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
            Component: CreateUser,
            title:'Create User'
          })

          dispatch(action);
        }}
      >
        Create User
      </button>
    </div>
  );
}
