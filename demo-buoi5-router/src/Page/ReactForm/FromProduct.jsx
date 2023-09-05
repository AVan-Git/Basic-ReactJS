//rcc
import React, { Component } from 'react'

export default class FromProduct extends Component {
   render() {
      return (
         <>
            <form className="card">
               <div className="card-header bg-dark text-warning">
                  Create Product
               </div>
               <div className="card-body row">
                  <div className="col-6">
                     <div className="form-group">
                        <p>id</p>
                        <input className='form-control' type="text" name="id" id="id" />
                     </div>
                     <div className="form-group">
                        <p>name</p>
                        <input className='form-control' type="text" name="name" id="name" />
                     </div>
                     <div className="form-group">
                        <p>price</p>
                        <input className='form-control' type="text" name="price" id="price" />
                     </div>
                  </div>

                  <div className="col-6">
                     <div className="form-group">
                        <p>image</p>
                        <input className='form-control' name="img" id="img" />
                     </div>

                     <div className="form-group">
                        <p>product type</p>
                        <select name="productType" id="productType" >
                           <option value={'mobile'} >mobile</option>
                           <option value={'tablet'} >tablet</option>
                           <option value={'laptop'} >laptop</option>
                        </select>
                     </div>
                     <div className="form-group">
                        <p>desscription</p>
                        <textarea className='form-control' name="desscription" id="desscription" />
                     </div>

                  </div>
               </div>
               <div className="card-footer text-muted">
                  <button type="button" class="btn btn-success">Create</button>
                  <button type="button" class="btn btn-primary">Update</button>
               </div>
            </form>

         </>
      )
   }
}
