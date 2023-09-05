import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    let {item, xemChiTiet} = this.props
    
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
                            xemChiTiet(item)
                           }
                        }
                     >Xem Chi Tiết</button>
                  </div>
               </div>
      </>
    )
  }
}
