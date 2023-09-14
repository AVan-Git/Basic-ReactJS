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
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps )(DemoChonXe)
