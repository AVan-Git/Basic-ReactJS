import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Burger extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  // cach 1: loi khi reload
  //   renderTopping = () => {
  //     let {burger} = this.props;
  //     console.log("🚀 ~ file: Burger.jsx:12 ~ Burger ~ burger:", burger)
  //     const arrDivJsx = []
  //     console.log("🚀 ~ file: Burger.jsx:14 ~ Burger ~ arrDivJsx:", arrDivJsx)
  //     burger.forEach(item => {
  //         let {quantity} = item;
  //         for (let index = 0; index < quantity; index++) {
  //             const divTopping = <div className={item.id} key={`${item.id}_${quantity}`}></div>
  //             arrDivJsx.push(divTopping)

  //         }
  //     });
  //     return arrDivJsx;
  //   }

  //cach 2
  renderTopping = (id) => {
    let {burger} = this.props;
    const arrDivJsx = [];
    let itemTopping = burger.find(item => item.id == id);
    for (let i = 0; i < itemTopping.quantity; i++) {
        const divTopping = <div className={id} key={i}></div>
        arrDivJsx.push(divTopping)
    }

    return arrDivJsx;

  }

  render() {
    return (
      <>
        <div className="breadTop"></div>
        {/* <div className="salad"></div>
        <div className="beef"></div>
        <div className="cheese"></div> */}
        {this.renderTopping("salad")}
        {this.renderTopping("beef")}
        {this.renderTopping("cheese")}
        <div className="breadBottom"></div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducers.burger,
});

export default connect(mapStateToProps)(Burger);
