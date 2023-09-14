import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TableComment from "./TableComment";
import FormComment from "./FormComment";

class DemoFormComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <div className="container">
        <h2 className="text-center text-danger">Demo Form for Redux</h2>
        <br />
        <TableComment />
        
        <FormComment />
    </div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoFormComment);
