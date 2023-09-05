import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {

    rengerProduct = () => {
        let {items, viewDetail} = this.props;

        return items.map((item, index) => {
            return <div className="col-3 mt-2" key={index}>
                <ItemProduct item = {item} viewDetail={viewDetail}/>
            </div>
        })
    }
    
  render() {

    
    
    return (
      <>
        <h3>Product list</h3>
        <div className="row">
            {this.rengerProduct()}
        </div>
      </>
    )
  }
}
