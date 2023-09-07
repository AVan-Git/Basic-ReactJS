//rcc
import React, { Component } from 'react'

export default class FromProduct extends Component {

   state = {
      id: '',
      name: '',
      price: '',
      productType: 'mobile',
      description: '',
      img: ''
   }

   // fun bat su kien nhap o input
   handleChange = (event) => {
      let { value, id } = event.target;
      this.setState({ [id]: value }, () => { console.log() })
   }


   // fun -chan su kien reload cua browser
   handleSubmit = (event) => {
      console.log("🚀 ~ file: FromProduct.jsx:24 ~ FromProduct ~ event:", event)
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
                        <input className='form-control' type="text" name="id" id="id" onInput={(event) => {

                           // console.log(event.target)  / lay data trong input
                           let { value } = event.target;
                           this.setState({ id: value }, () => { console.log() })
                        }} />
                     </div>
                     <div className="form-group">
                        <p>name</p>
                        <input className='form-control' type="text" name="name" id="name" onInput={(event) => {
                           let { value, id } = event.target;  // event.target.id === idoi o input 
                           this.setState({ [id]: value }, () => { console.log() })
                        }} />
                     </div>
                     <div className="form-group">
                        <p>price</p>
                        <input className='form-control' type="text" name="price" id="price" onInput={this.handleChange} />
                     </div>
                  </div>

                  <div className="col-6">
                     <div className="form-group">
                        <p>image</p>
                        <input className='form-control' name="img" id="img" onInput={this.handleChange}/>
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
                        <p>desscription</p>
                        <textarea className='form-control' name="desscription" id="desscription" onInput={this.handleChange} />
                     </div>

                  </div>
               </div>
               <div className="card-footer text-muted">
                  <button  class="btn btn-success mx-2">Create</button>
                  <button type="button" class="btn btn-primary">Update</button>
               </div>
            </form>

         </>
      )
   }
}
