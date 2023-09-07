//rcc
import React, { Component } from 'react'

export default class TableProduct extends Component {

  handleProduct = () => {

    let { arrProduct } = this.props
    console.log("🚀 ~ file: TableProduct.jsx:9 ~ TableProduct ~ arrProduct:", arrProduct)

    return arrProduct.map((item, index) => {
      return <tr class="">
        <td scope="row">{item.id}</td>
        <td><img src={item.img} alt='...' /></td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.productType}</td>
        <td>{item.description}</td>
        <td>
          <button type="button" class="btn btn-danger mx-2">Del</button>
          <button type="button" class="btn btn-primary">Edit</button>
        </td>
      </tr>
    })

  }

  render() {

    let {arrProduct, delProduct} = this.props;

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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr class="">
                <td scope="row">01</td>
                <td><img src='https://picsum.photos/50/50' alt='...' /></td>
                <td>Product 1</td>
                <td>1000</td>
                <td>mobile</td>
                <td>Description Product 1</td>
                <td>
                  <button type="button" class="btn btn-danger mx-2">Del</button>
                  <button type="button" class="btn btn-primary">Edit</button>
                </td>
              </tr> */}

              {/* {this.handleProduct()} */}

              {
                arrProduct.map((item, index) => {
                  return <tr class="">
                    <td scope="row">{item.id}</td>
                    <td><img width={50} src={item.img} alt='...' /></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.productType}</td>
                    <td>{item.description}</td>
                    <td>
                      <button type="button" class="btn btn-danger mx-2" 
                        onClick={() => {
                          delProduct(item.id)
                        }}
                       >Del</button>
                      <button type="button" class="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>

      </>
    )
  }
}
