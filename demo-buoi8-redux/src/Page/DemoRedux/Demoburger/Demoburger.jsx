import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Burger from "./Burger";
import Menu from "./Menu";

class Demoburger extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center text-danger">Demo Hamburger</h2>
        <hr />
        <div className="row">
          <div className="col-6">
            <Burger />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Demoburger);
