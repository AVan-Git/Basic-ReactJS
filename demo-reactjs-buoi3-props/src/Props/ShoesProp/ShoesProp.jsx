//rcc
import React, { Component } from 'react'
import DataBase from '../../DataBase/DataBase'
import ComponentItem from './ComponentItem';

const data = DataBase;

export default class ShoesProp extends Component {

   renderShoe =  () => {
      return data.map((itemShoe, index) => {
         return <div className="col-3" key={index}>
            <ComponentItem  item= {itemShoe} />
         </div>
      })
   }

    render() {
        return (
            <div className='container'>
                <div className="text-center text-danger">ShoesProp</div>
                <hr></hr>
                {/* <ComponentItem /> */}
                <div className="row">
                     {this.renderShoe()}
                </div>
            </div>
        )
    }
}
