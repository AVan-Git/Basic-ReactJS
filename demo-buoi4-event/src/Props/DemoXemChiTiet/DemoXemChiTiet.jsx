import React, { Component } from 'react'
import DataPhone from '../DataBase/DataPhone'


const data = DataPhone;

export default class DemoXemChiTiet extends Component {

   // su dung state su ly data

   state = {
      item: data[0]

   }



   renderProduct = () => {
      return data.map((item, index) => {
         return (
            <div className="col-4 mt-3" key={index}>
               <div className="card" style={{ backgroundColor: "rgba(84, 231, 247)", borderColor: 'darkblue' }}>
                  <img className="card-img-top" src={item.hinhAnh} alt="Title" />
                  <div className="card-body">
                     <h4 className="card-title">{item.tenSP}</h4>
                     <p className="card-text">{item.giaBan} VND</p>

                     <button type="button"
                        class="btn btn-primary"
                        data-bs-toggle="button"
                        aria-pressed="false"
                        autocomplete="off"
                        onClick={
                           () => {
                              this.setState({ item: data[index] }, () => {
                                 console.log("🚀 ~ file: DemoXemChiTiet.jsx:38 ~ DemoXemChiTiet ~ index:", index)
                              })
                           }
                        }
                     >Xem Chi Tiết</button>
                  </div>
               </div>
            </div>
         )
      })
   }
   render() {



      return (
         <div className='container mt-3'>
            <h2 className="text-center text-danger">DemoXemChiTiet</h2>
            <hr />

            <div className="row">

               {this.renderProduct()}

            </div>

            {/* Detail Phone */}

            <div className="detail-phone mt-2">
               <div className="row">
                  <div className="col-3">
                     <h3 className="text-center">Iphone</h3>
                     <img className="card-img-top" src={this.state.item.hinhAnh} alt="Title" />
                  </div>
                  <div className="col-9">
                     <h3 className="text-center">Thông tin chi tiết</h3>
                     <table className='table'>
                        <tbody>
                           <tr>
                              <td>Màn Hình</td>
                              <td>{this.state.item.manHinh}</td>
                           </tr>
                           <tr>
                              <td>Hệ điều hành</td>
                              <td>{this.state.item.heDieuHanh} </td>
                           </tr>
                           <tr>
                              <td>Camera trước</td>
                              <td>{this.state.item.cameraTruoc} </td>
                           </tr>
                           <tr>
                              <td>Camera Sau</td>
                              <td>{this.state.item.cameraSau} </td>
                           </tr>
                           <tr>
                              <td>Ram</td>
                              <td>{this.state.item.ram} </td>
                           </tr>
                           <tr>
                              <td>Rom</td>
                              <td>{this.state.item.rom} </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

         </div>
      )
   }
}
