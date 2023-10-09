import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Search() {
  let [arrProduct, setArrProduct] = useState([]);

  //
  const handleChange = (e) => {};
  //
  const handleSubmit = (e) => {
    e.preventDefaul();
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3 className="">Search</h3>
      <div className="form-group">
        <p>Nhập từ khóa</p>
        <div className="input-group-prepend">
          <input
            type="text"
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button type="button" class="btn btn-dark text-white">
            Search
          </button>
        </div>
      </div>
      {/*  */}
      <div className="mt-3">
        <p>kết quả tìm kiếm.</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={item.image} alt="Shoe" />
                  <div className="card-body">
                    <h4 className="card-title" style={{ minHeight: "60px" }}>
                      {item.name}
                    </h4>
                    <p className="card-text">{item.price} $</p>
                    <NavLink
                      to={`/detail/${item.id}`}
                      className="btn btn-primary"
                    >
                      View Detail
                    </NavLink>
                    {/* <button type="button" class="btn btn-primary">
                  View Detail
                </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
