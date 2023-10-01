// rfc
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../redux/reducers/numberReducer";
// import { connect } from "react-redux";

function DemoNumber(props) {
  //lay data redux theo fun
  const number = useSelector((state) => state.number);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Number : {number}</h3>

      <button
        onClick={() => {
          // tự tạo action de dispatch reducer slice
          // cách 1: tự tạo action
          const action = {
            type: "numberReducer/changeNumber",
            payload: number + 1,
          };
          dispatch(action);
        }}
        type="button"
        className="btn btn-success mx-2"
      >
        +
      </button>

      <button
        onClick={() => {
          // tự tạo action de dispatch reducer slice
          // cách 2: action  creator
          const action = changeNumber(number + 1);
          //note khi goi ham này changeNumber thì truong trình sẽ tự sinh ra action
          /* 
          const action = {
            type: "numberReducer/changeNumber",
            payload: number + 1,
          };
          */
          dispatch(action);
        }}
        type="button"
        className="btn btn-success mx-2"
      >
        add cach 2
      </button>
    </div>
  );
}
//reduxmap -- kieu cu
// const mapStateToProps = (state) => ({
//     number : state.number
// });

// export default connect(mapStateToProps)(DemoNumber);

export default DemoNumber;
