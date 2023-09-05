//rcc
import React, { Component } from 'react'
import FromProduct from './FromProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {
  render() {
    return (
      <div className='container' >
        <h2 className="text-center text-danger">Product Management</h2>
        <hr />
        <FromProduct />
        <TableProduct />
        
      </div>
    )
  }
}
