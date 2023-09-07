//rcc
import React, { Component } from 'react'
import FromProduct from './FromProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      { id: '01', name: 'Product 1', price: '1000', productType: 'mobile', description: 'des 1', img: 'https://picsum.photos/50/50' },
      { id: '02', name: 'Product 2', price: '1500', productType: 'tablet', description: 'des 2', img: 'https://picsum.photos/50/50' },
    ]
  }

  addProduct = async (newProduct) => {
    console.log('addProduct()');
    // console.log("🚀 ~ file: ReactForm.jsx:16 ~ ReactForm ~ newProduct:", newProduct)

    //  this.state.arrProduct.push(newProduct)  
    let arrUpdate = [...this.state.arrProduct, {...newProduct}]
    await this.setState(
      {
        arrProduct: arrUpdate
      }
    )

  }

  render() {
    return (
      <div className='container' >
        <h2 className="text-center text-danger">Product Management</h2>
        <hr />
        <FromProduct addProduct={this.addProduct} />
        <TableProduct arrProduct={this.state.arrProduct} />

      </div>
    )
  }
}
