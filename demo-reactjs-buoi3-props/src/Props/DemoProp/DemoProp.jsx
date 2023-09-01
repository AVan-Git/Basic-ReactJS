import React, { Component } from 'react'
import ProductCard from './ProductCard'

const data = [
{id:1, name:'Van', age:25},
{id:2, name:'Binh', age:20},
{id:3, name:'Kien', age:19},
{id:4, name:'Bao', age:26}

]

export default class DemoProp extends Component {

  renderPerson = () => {
    // data.forEach(val => {
    //   return <ProductCard item = {val} />
    // })

    return data.map((val, index) => {
      return <div className="col-3">
        <ProductCard item={val} key={index}/>
      </div>
    })
  }
  item1 =  { name:"Van", age:18}

  render() {
    return (
      <div className='container'>
        {/* props data đơn */}
        {/* <div className="w-25">
          <ProductCard item={this.item1} key={1} />
        </div>
        <div className="w-25">
          <ProductCard item={this.item1} key={2} />
        </div> */}

        <div className="row">
          {this.renderPerson()}
        </div>

      </div>
    )
  }
}
