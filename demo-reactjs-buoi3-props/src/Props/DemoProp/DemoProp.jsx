import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class DemoProp extends Component {
  render() {
    return (
      <div className='container'>
        <div className="w-25">
          <ProductCard name="Van" age="18" />
        </div>
        <div className="w-25">
          <ProductCard name="AVan" age="20" />
        </div>
      </div>
    )
  }
}
