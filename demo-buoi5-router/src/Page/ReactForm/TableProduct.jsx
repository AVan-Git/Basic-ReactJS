//rcc
import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <>
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td scope="row">R1C1</td>
                <td>R1C2</td>
                <td>R1C3</td>
                <td>R1C3</td>
                <td>R1C3</td>
                <td>R1C3</td>
              </tr>
              <tr class="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
                <td>Item</td>
                <td>Item</td>
                <td>Item</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </>
    )
  }
}
