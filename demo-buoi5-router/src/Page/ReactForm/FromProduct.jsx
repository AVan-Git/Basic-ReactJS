//rcc
import React, { Component } from 'react'

export default class FromProduct extends Component {

   state = {
      productInfo: {
         id: '',
         name: '',
         price: '',
         productType: 'mobile',
         description: '',
         img: ''
      },
      error: {
         id: '',
         name: '',
         price: '',
         description: '',
         img: ''
      }
   }

   // fun bat su kien nhap o input
   handleChange = (event) => {
      // event.target // lay data trong input
      let { value, id, name } = event.target;
let dataType = event.target.getAttribute('data-type')

      // debugger;
      // this.setState({ [id]: value }, () => { console.log() })

      // su ly product info
      let newValue = this.state.productInfo;
      newValue[id] = value
      // su ly error
      let newErr = this.state.error;
      let messErr = ""
      if (value.trim() === "") {
         messErr = id + " - không được để trống !"
      }else{
         if (dataType == "number") {
            let regexNumber = /^\d+$/;
            if (!regexNumber.test(value)) {
               messErr= id + ' phải là số!!'
               
            }
            
         }
      }
      newErr[id] = messErr;

      // setState
      this.setState(
         {
            productInfo: newValue,
            error: newErr
         }, () => {
            console.log(this.state);
         }
      )
   }


   // fun -chan su kien reload cua browser
   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);

   }
   render() {
      return (
         <>
            <form className="card" onSubmit={this.handleSubmit}>
               <div className="card-header bg-dark text-warning">
                  Create Product
               </div>
               <div className="card-body row">
                  <div className="col-6">
                     <div className="form-group">
                        <p>id</p>
                        <input className='form-control' type="text" name="mã" id="id" onInput={this.handleChange} />
                        <p className="text-danger">{this.state.error.id}</p>
                     </div>
                     <div className="form-group">
                        <p>name</p>
                        <input className='form-control' type="text" name="name" id="name" onInput={this.handleChange} />
                        <p className="text-danger">{this.state.error.name}</p>
                     </div>
                     <div className="form-group">
                        <p>price</p>
                        <input data-type="number" className='form-control' type="text" name="price" id="price" onInput={this.handleChange} />
                        <p className="text-danger">{this.state.error.price}</p>
                     </div>
                  </div>

                  <div className="col-6">
                     <div className="form-group">
                        <p>image</p>
                        <input className='form-control' name="img" id="img" onInput={this.handleChange} />
                        <p className="text-danger">{this.state.error.img}</p>
                     </div>

                     <div className="form-group">
                        <p>product type</p>
                        <select name="productType" id="productType" className='form-control' onInput={this.handleChange} >
                           <option value={'mobile'} >mobile</option>
                           <option value={'tablet'} >tablet</option>
                           <option value={'laptop'} >laptop</option>
                        </select>
                     </div>
                     <div className="form-group">
                        <p>description</p>
                        <textarea className='form-control' name="description" id="description" onInput={this.handleChange} />
                        <p className="text-danger">{this.state.error.description}</p>
                     </div>

                  </div>
               </div>
               <div className="card-footer text-muted">
                  <button class="btn btn-success mx-2">Create</button>
                  <button type="button" class="btn btn-primary">Update</button>
               </div>
            </form>

         </>
      )
   }
}
