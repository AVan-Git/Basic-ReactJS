import React, { Component } from 'react'
import DataPhone from '../DataBase/DataPhone'


const data = DataPhone;

export default class DemoXemChiTiet extends Component {

   

   renderProduct = () => {
         return data.map((item, index) => {
            console.log("🚀 ~ file: DemoXemChiTiet.jsx:12 ~ DemoXemChiTiet ~ returndata.map ~ item:", item)
            return (
               <div className="col-4 mt-3" key={index}>
                  <div className="card" style={{ backgroundColor: "rgba(84, 231, 247)", borderColor: 'darkblue' }}>
                     <img className="card-img-top" src={item.hinhAnh} alt="Title" />
                     <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <p className="card-text">{item.giaBan} VND</p>

                        <button type="button" class="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">Xem Chi Tiết</button>
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
                     <img className="card-img-top" src="./img/samsung.webp" alt="Title" />
                  </div>
                  <div className="col-9">
                     <h3 className="text-center">Thông tin chi tiết</h3>
                     <table className='table'>
                        <tbody>
                           <tr>
                              <td>Màn Hình</td>
                              <td>Màn Hình</td>
                           </tr>
                           <tr>
                              <td>Hệ điều hành</td>
                              <td>Hệ điều hành</td>
                           </tr>
                           <tr>
                              <td>Camera trước</td>
                              <td>Camera trước</td>
                           </tr>
                           <tr>
                              <td>Camera Sau</td>
                              <td>Camera Sau</td>
                           </tr>
                           <tr>
                              <td>Ram</td>
                              <td>Ram</td>
                           </tr>
                           <tr>
                              <td>Rom</td>
                              <td>Rom</td>
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
