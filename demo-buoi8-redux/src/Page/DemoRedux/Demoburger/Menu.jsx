import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Menu extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <>
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
                    <tr class="">
                        <td scope="row">salad</td>
                        <td>
                            <button type="button" class="mx-2 btn btn-primary">+</button>
                            1
                            <button type="button" class="mx-2 btn btn-primary">-</button>
                        </td>
                        <td>10</td>
                    </tr>
                    <tr class="">
                        <td scope="row">cheese</td>
                        <td>
                            <button type="button" class="mx-2 btn btn-primary">+</button>
                            1
                            <button type="button" class="mx-2 btn btn-primary">-</button>
                        </td>
                        <td>10</td>
                    </tr>
                    <tr class="">
                        <td scope="row">beef</td>
                        <td>
                            <button type="button" class="mx-2 btn btn-primary">+</button>
                            1
                            <button type="button" class="mx-2 btn btn-primary">-</button>
                        </td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="right" >
                        Total: 
                        </td>
                        <td>30 $</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        
    </>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Menu);
