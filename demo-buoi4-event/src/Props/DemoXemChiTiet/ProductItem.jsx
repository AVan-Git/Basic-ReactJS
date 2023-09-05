import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    let {item} = this.props
    
    console.log("🚀 ~ file: ProductItem.jsx:7 ~ ProductItem ~ render ~ this.props:", this.props)
    return (
      <>
        <h2 className="text-center text-danger">ProductItem</h2>
        <hr />
        <div className="card" style={{ backgroundColor: "rgba(84, 231, 247)", borderColor: 'darkblue' }}>
                  <img className="card-img-top" src={item?.hinhAnh} alt="Title" />
                  <div className="card-body">
                     <h4 className="card-title">{item?.tenSP}</h4>
                     <p className="card-text">{item?.giaBan} VND</p>

                     <button type="button"
                        class="btn btn-primary"
                        data-bs-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                        onClick={
                           () => {
                              
                            //   this.setState({ item: item}, () => {
                            //      console.log("🚀 ~ file: DemoXemChiTiet.jsx:38 ~ DemoXemChiTiet ~ index:", index)
                            //   })
                           }
                        }
                     >Xem Chi Tiết</button>
                  </div>
               </div>
      </>
    )
  }
}
