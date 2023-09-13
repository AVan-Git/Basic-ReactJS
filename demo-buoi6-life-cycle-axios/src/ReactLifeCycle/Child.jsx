import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
    console.log('constructor - child');
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDrivedStateFromProps - child');
    return null;
  }

  /**
   * this.props: là props hiên tại
   * nextProps  ; là props mới trước khi render()
   * nextState 
   * @returns 1 chay cả render va componentDidMount() khi component được gọi
   *          false : thi se reload  render() và componentDidMount()
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.number !== nextProps) {
  //     console.log('shouldComponentUpdate - child'); 
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log('render - child');
    return (
      <div className='container'>
        <div className="display-4 p-5 bg-dark text-white">
          Component Child

          <p>Number : {this.props.number}</p>
        </div>

      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount - child");
  }
}
