import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Burger extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  renderTopping = () => {
    let {burger} = this.props;
    console.log("🚀 ~ file: Burger.jsx:12 ~ Burger ~ burger:", burger)
    const arrDivJsx = []
    burger.forEach(item => {
        let {quantity} = item;
        for (let index = 0; index < quantity; index++) {
            const divTopping = <div className={item.id} key={`${item.id}_${quantity}`}></div>
            arrDivJsx.push(divTopping)
            
        }
    });

    return arrDivJsx;
  }

  render() {
    
    return <>
        <div className="breadTop"></div>
        {/* <div className="salad"></div>
        <div className="beef"></div>
        <div className="cheese"></div> */}
        {this.renderTopping()}
        <div className="breadBottom"></div>
    </>;
  }
}

const mapStateToProps = (state) => ({
    burger: state.burgerReducers.burger
});

export default connect(mapStateToProps)(Burger);
