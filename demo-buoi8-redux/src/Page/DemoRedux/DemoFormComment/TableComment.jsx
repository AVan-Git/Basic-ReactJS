import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TableComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        {/* <img src=" https://i.pravatar.cc/?u=20" alt="..." height={300} /> */}

        <div className="row mt-2  ">
          <div className="col-2">
            <img src=" https://i.pravatar.cc/?u=1" className="rounded" alt="..." height={80} />
          </div>
          <div className="col-8 bg-secondary rounded">
            <h3>Nguyen van </h3>
            <p>like like ...</p>
          </div>
        </div>

        <div className="row mt-2  ">
          <div className="col-2 ">
            <img src=" https://i.pravatar.cc/?u=2" className="rounded" alt="..." height={80} />
          </div>
          <div className="col-8 bg-secondary rounded">
            <h3>Nguyen van </h3>
            <p>like like ...</p>
          </div>
        </div>



      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(TableComment);
