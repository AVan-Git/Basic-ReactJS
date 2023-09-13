import React, { Component } from 'react'
import Child from './Child';

export default class DemoLifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1
    }
    console.log('constructor');
  }

  /*** getDerivedStateFromProps() ham su lys ngoai le || tiền sử lý trước khi gọi ham render()  
   * ham duoc chay truoc render()
   */
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDrivedStateFromProps');
    // this.state({number: 2}, () => {console.log();})
    // currentState.number = 20
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate ');
    return true;
  }

  render() {
    console.log('render');
    return (
      <div className='container'>
        <div className="row">
          <h3>Number: {this.state.number} </h3>
          
          <button type="button" class="btn btn-success"
            onClick={() => {this.setState({number: ++this.state.number}, () => {console.log();})}}
          >+</button>
        </div>
        <br />
        <div className="row">
          <h3>Like: {this.state.like} </h3>
          <button type="button" class="btn btn-success"
            onClick={() => {this.setState({like: ++this.state.like }, ()=> {console.log();})}}
          >+</button>
          
        </div>
        <hr />
        <Child number={this.state.number} like={this.state.like} />
      </div>
    )
  }

  componentDidMount () {
    console.log("componentDidMount");
    /// chỉ chạy 1 lần khi component load đầu tiên
  }
}
