import React, { Component } from 'react'
import Child from './Child';

export default class DemoLifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
    console.log('constructor');
  }

  /*** getDerivedStateFromProps() ham su lys ngoai le || tiền sử lý trước khi gọi ham render()  
   * ham duoc chay truoc render()
   */
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDrivedStateFromProps');
    // this.state({number: 2}, () => {console.log();})
    currentState.number = 2
    return currentState;
  }

  render() {
    console.log('render');
    return (
      <div className='container'>
        <h3>Number: {this.state.number} </h3>
        <Child />
      </div>
    )
  }

  componentDidMount () {
    console.log("componentDidMount");
  }
}
