//rcc
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
            <p>Không tìm thấy quay về <NavLink to="/">Trang chủ</NavLink> !</p>
      </div>
    )
  }
}
