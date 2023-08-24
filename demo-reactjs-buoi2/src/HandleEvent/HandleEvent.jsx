import React, { Component } from 'react'

export default class HandleEvent extends Component {

  handleClick = () => {
    alert('chao ban !!!')
  }

  showMess = (mess) => {
  console.log("🚀 ~ file: HandleEvent.jsx:10 ~ HandleEvent ~ mess:", mess)

    alert(`mess: ${mess}`)

  }

  render() {
    return (
      <div className="container">
        <button type="button" id='btnClick' onClick={(e) => {
          alert('Chào bạn....')
        }}>Click me!</button>

        <button type="button" className="btn btn-warning ml-2" onClick={this.handleClick}>Click me!!!</button>

        {/*  */}
        <h3>Handle click param</h3>
        <button type="button" className="btn btn-danger m-lg-1" onClick={(e) => {
          // goi cac hang khac khi click
          this.showMess('toi la Avan')
        }}>Show mess</button>

        <button type="button" className="btn btn-warning ml-2" onClick={this.showMess.bind(this, "toi laf Avan... =))")}>Show mess!!!</button>

      </div>
    )
  }
}
