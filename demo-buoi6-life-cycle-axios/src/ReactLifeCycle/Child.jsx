import React, { Component } from 'react'

export default class Child extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          
        }
        console.log('constructor - child');
      }
    
      static getDrivedStateFromProps(newProps, currentState) {
        console.log('getDrivedStateFromProps - child');
        return null;
      }
    
      render() {
        console.log('render - child');
        return (
          <div className='container'>
            <div className="display-4 p-5 bg-dark textwhite">
                Component Child
            </div>
            
          </div>
        )
      }
    
      componentDidMount () {
        console.log("componentDidMount - child");
      }
}
