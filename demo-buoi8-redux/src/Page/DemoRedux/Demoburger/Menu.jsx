import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Menu extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  renderMenu = () => {
    let { burger } = this.props;
    return burger.map((item, index) => {
      return (
        <tr class="" key={index}>
          <td scope="row">{item.id}</td>
          <td>
            <button
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: 1,
                  },
                };
                this.props.dispatch(action);
              }}
              type="button"
              className="mx-2 btn btn-primary"
            >
              +
            </button>
            {item.quantity > 10 ? item.quantity : `0${item.quantity}`}
            <button
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: -1,
                  },
                };
                this.props.dispatch(action);
              }}
              type="button"
              className="mx-2 btn btn-primary"
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
        </tr>
      );
    });
  };

  //cach1
  //   renderTotal = () => {
  //     let sum = 0;
  //     this.props.burger.forEach((item) => {
  //       sum += item.price * item.quantity;
  //     });
  //     return sum;
  //   };

  // cach 2
    renderTotal = () => {
        let {burger} = this.props;
        return burger.reduce((total, item, index) => {
            return total += item.quantity * item.price
        }, 0)
    }

  render() {
    let { burger } = this.props;
    return (
      <>
        <h3 className="text-center">Menu</h3>
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">Topping</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr class="">
                <td scope="row">salad</td>
                <td>
                  <button type="button" class="mx-2 btn btn-primary">
                    +
                  </button>
                  1
                  <button type="button" class="mx-2 btn btn-primary">
                    -
                  </button>
                </td>
                <td>10</td>
              </tr>
              <tr class="">
                <td scope="row">cheese</td>
                <td>
                  <button type="button" class="mx-2 btn btn-primary">
                    +
                  </button>
                  1
                  <button type="button" class="mx-2 btn btn-primary">
                    -
                  </button>
                </td>
                <td>10</td>
              </tr>
              <tr class="">
                <td scope="row">beef</td>
                <td>
                  <button type="button" class="mx-2 btn btn-primary">
                    +
                  </button>
                  1
                  <button type="button" class="mx-2 btn btn-primary">
                    -
                  </button>
                </td>
                <td>10</td>
              </tr> */}

              {this.renderMenu()}
              <tr>
                <td colSpan={2} align="right">
                  Total:
                </td>
                <td>{this.renderTotal()} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducers.burger,
});

export default connect(mapStateToProps)(Menu);
