import React, { Component } from 'react'

export default class Child extends Component {

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



  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate() - child');
    return false;
  }

  render() {
    console.log('render - child');
    return (
      <div className='container'>
        <div className="display-4 p-5 bg-dark text-white">
          Component Child
        </div>

      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount - child");
  }
}
