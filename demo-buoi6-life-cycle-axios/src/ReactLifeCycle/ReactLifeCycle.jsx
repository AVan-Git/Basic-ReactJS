import React, { Component } from 'react'
import Child from './Child';

export default class DemoLifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      objectNumber:{
        number: 1,
      },
       count : 60,
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
          <h3>Number: {this.state.objectNumber.number} </h3>
          
          <button type="button" class="btn btn-success"
            onClick={() => {
              let obNumber = {...this.state.objectNumber};
              obNumber.number += 1;


              this.setState({objectNumber: obNumber}, () => {console.log();})
            }}
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
        <Child obNumber={this.state.objectNumber} like={this.state.like} />

        <hr />
        <>Count: {this.state.count}</>
      </div>
    )
  }

  componentDidMount () {
    console.log("componentDidMount");
    /// chỉ chạy 1 lần khi component load đầu tiên
    // this.setState({count: -- this.state.count}, ()=> {console.log();})
    /**setInterval(fun, time)
     * mỗi giây sẽ chạy một lần
     */
    setInterval(()=> {
      this.setState({count: this.state.count - 1}, ()=> {console.log();}) 
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState){
      /*
        mỗi lần cập nhật prop hay state no sẽ chạy
        Handle sau khi component goi render() 
        tuy nhiên hạn chế setState ở đây, setState ở đây phải có lênh if  -- nếu không nó sẽ render() liện tục như lệnh for
      */

        console.log(prevProps);
        console.log(prevState);

  }

  
}
