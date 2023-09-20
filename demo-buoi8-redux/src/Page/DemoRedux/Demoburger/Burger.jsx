import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Burger extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <>
        <div className="breadTop"></div>
        <div className="salad"></div>
        <div className="beef"></div>
        <div className="cheese"></div>
        <div className="breadBottom"></div>
    </>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Burger);
