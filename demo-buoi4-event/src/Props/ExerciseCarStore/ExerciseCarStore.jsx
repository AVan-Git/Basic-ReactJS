import React, { Component } from 'react'
import ModelCar from './ModelCar'
import ProductList from './ProductList'

import DataCar from '../DataBase/DataCar'

const data = DataCar

export default class ExerciseCarStore extends Component {

    state = {
        itemCar: data[1]
    }

    //lấy dữ liệu người dùng click that thế cho state hien tại
    viewDetail = (newItem) => {
        this.setState({itemCar: newItem}, () => {
            console.log()
        })
    }

  render() {
    return (
      <div className='container'>
        <h3 className="text-center text-danger mt-2">ExerciseCarStore</h3>
        <hr />
        <ModelCar itemCar={this.state.itemCar} />
        <ProductList items={data} viewDetail={this.viewDetail} />
      </div>
    )
  }
}
