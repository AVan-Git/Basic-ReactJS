import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class DemoChonXe extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='container'>
        <h3 className="text-center text-danger">Bài tập chọn xe</h3>
        <hr />
        <div className="row">
            <div className="col-6">
                <img src="./img/products/car_black.webp" alt="my car" className='w-100' />
            </div>
            <div className="col-6">
                <div className="mx-2">
                    <button  class="btn btn-white mx-2" style={{"border": "1", borderColor:'black'}}>White</button>
                    <button className="btn btn-dark mx-2"> Black</button>
                    <button className="btn btn-primary mx-2"> Blue</button>
                    <button className="btn btn-warning mx-2"> Yellow</button>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  

    
})

export default connect(mapStateToProps )(DemoChonXe)
