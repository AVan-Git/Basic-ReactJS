import React, { Component } from 'react'

//kết nỗi redux
import {connect }  from 'react-redux'
class DemoTangGiamSoLuong extends Component {
  render() {
    console.log(this.props);  // trả về {dispatch: ƒ} là đã được kết nối tới redux
    return (
      <div className='container'>
            <h3 className="text-center">Demo tăng giảm số lượng.</h3>
            <h3>Number: {this.props.number}</h3>
            <button onClick={() => {
              //b1: tao obj action
              const action = {
                type:'TANG_SL',// thuoc tinhs bat buoc
                payload:1 
              }
              // b2: dung thuoc tinhs props.dispatch để đưa dữ liêu lên redux
              this.props.dispatch(action)
            }} className='btn btn-success'>+</button>

            <hr />
            <img src={this.props.img} width={200} alt='...' />
          </div>
    )
  }
}

// lấy state từ redux về và biến thành  this.props của component
// note: nhớ gán xuống connect
const mapStateToProps = (state) => {
    // return về object gì thì đó sẽ là props cua component
    return {
        number: state.number,
        img: state.stateA
    }
}
/**
 * function co mot lenh return vef 1 object thi viet tắt thành
 * (param) => { return {prop1: '....'}}
 * (param) => ({})
 * {return: sẽ được chuyển thành() }
 */


//tạo ra component chứa logic của redux

export default  connect(mapStateToProps)(DemoTangGiamSoLuong);

