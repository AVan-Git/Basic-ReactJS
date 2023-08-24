import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

  state = {
    img: "./img/products/car_black.webp"
  }

  /*  cach 1
  setImg = (val)=> {
    if (val === 'Black') {
      this.setState({img: './img/products/car_black.webp'}, ()=> {
        console.log(val)
      })
      return 
    }
    
    if (val === 'Red') {
      this.setState({img: './img/products/car_white.webp'}, ()=> {
        console.log(val)
      })
      return 
    }
    
    if (val === 'Blue') {
      this.setState({img: './img/products/car_blue.webp'}, ()=> {
        console.log(val)
      })
      return 
    }
    
    if (val === 'Yellow') {
      this.setState({img: './img/products/car_yellow.jpg'}, ()=> {
        console.log(val)
      })
      return 
    }

  }
  */

  
  // Cach 2 
  setImg = async (val) => {
    if (val === 'Black') {
      await this.setState({img: './img/products/car_black.webp'})
      return 
    }
    
    if (val === 'Red') {
      await this.setState({img: './img/products/car_white.webp'})
      return 
    }
    
    if (val === 'Blue') {
      await this.setState({img: './img/products/car_blue.webp'})
      return 
    }
    
    if (val === 'Yellow') {
      await this.setState({img: './img/products/car_yellow.jpg'})
      return 
    }
  }
  

  //Cach 3
  // setImg =  async (val) => {
  //   await this.setState({img:`./img/products/car_${val}.webp`})
  //     return 
  // }

  render() {
    return (
      <div>
        <h1 className="text-center text-danger m-3">Bai Tap Chon Xe</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={this.state.img} alt="..." className='w-100' />
            </div>
            <div className="col-6 ">
              <button type="button" className="btn mx-2 btn-dark" onClick={() => {
                this.setImg('Black')
              }}>Black</button>
              <button type="button" className="btn mx-2 btn-danger" onClick={() => {
                this.setImg('Red')
              }}>Red</button>
              <button type="button" className="btn mx-2 btn-warning" onClick={() => {
                this.setImg('Yellow')
              }}>Yellow</button>
              <button type="button" className="btn mx-2 btn-primary" onClick={() => {
                this.setImg('Blue')
              }}>Blue</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
