import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DemoChonXe extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  bandleCar = (color) => {
    // buoc 2: viet hàm gửi datalen redux
    const action = {
      type: color,
    };
    this.props.dispatch(action);
  };

  render() {
    // console.log(this.props);

    return (
      <div className="container">
        <h3 className="text-center text-danger">Bài tập chọn xe</h3>
        <hr />
        <div className="row">
          <div className="col-6">
            <img src={this.props.img} alt="my car" className="w-100" />
          </div>
          <div className="col-6">
            <div className="mx-2">
              <button 
                onClick={() => this.bandleCar("white")}
                class="btn btn-white mx-2"
                style={{ border: "1", borderColor: "black" }}
              >
                White
              </button>
              <button className="btn btn-dark mx-2"
              onClick={() => this.bandleCar("black")}> Black</button>
              <button className="btn btn-primary mx-2"
              onClick={() => this.bandleCar("blue")}> Blue</button>
              <button className="btn btn-warning mx-2"
              onClick={() => this.bandleCar("yellow")}> Yellow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //buoc 1: khongo can return vi ham viết tắt ({})
  img: state.stateCar,
});

export default connect(mapStateToProps)(DemoChonXe);
