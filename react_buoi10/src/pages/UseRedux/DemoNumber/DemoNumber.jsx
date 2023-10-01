// rfc
import React from "react";
import { connect } from "react-redux";

function DemoNumber(props) {
  return <div className="container">
    Number : {props.number}

    <button onClick={() => {
        // const action = {
        //     type:"ADD_NUMBER"
        // }
    }} type="button" className="btn btn-success mx-2">+</button>
  </div>;
}
//reduxmap -- kieu cu
const mapStateToProps = (state) => ({
    number : state.number
});

export default connect(mapStateToProps)(DemoNumber);
