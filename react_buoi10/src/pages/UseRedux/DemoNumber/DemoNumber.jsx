// rfc
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
          const action = {
            type: "CHANGE_NUMBER",
            payload: number + 1,
          };
          dispatch(action);
        }}
        type="button"
        className="btn btn-success mx-2"
      >
        +
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
