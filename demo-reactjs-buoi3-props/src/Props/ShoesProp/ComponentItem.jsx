import React, { Component } from 'react'

export default class ComponentItem extends Component {



   render() {
      let { item } = this.props;
      return (
         <>
            <div className="card text-white bg-primary mt-3">
               <img className="card-img-top"
                  src={item?.image}
                  alt="Title"
                  width={"50%"}
               />
               <div className="card-body">
                  <h4 className="card-title" style={{height:75}}>Name: {item?.name}</h4>
                  <p className="card-text">Price: {item?.price} $</p>
                  <button type="button" class="btn  btn-success text-white" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                     Add to carts
                  </button>

               </div>
            </div>

         </>
      )
   }
}
