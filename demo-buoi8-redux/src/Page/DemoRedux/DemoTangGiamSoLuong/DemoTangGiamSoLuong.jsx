import React, { Component } from 'react'

//kết nỗi redux
import {connect }  from 'react-redux'
class DemoTangGiamSoLuong extends Component {
  render() {
    // console.log(this.props); // trả về {dispatch: ƒ} là đã được kết nối tới redux
    return (
      <div className='container'>
            <h3 className="text-center">Demo tăng giảm số lượng.</h3>
            <h3>Number: {this.props.number}</h3>
            <button className='btn btn-success'>+</button>
      </div>
    )
  }
}

// lấy state từ redux về và biến thành  this.props của component
// note: nhớ gán xuống connect
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

//tạo ra component chứa logic của redux
const ComponentRedux = connect(mapStateToProps)(DemoTangGiamSoLuong);

export default ComponentRedux;
