import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

// cal API
const getProductByKeyworkApi = async (value, setArrProduct) => {
  try {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/product?keyword=${value}`,
      method: "GET",
    });
    setArrProduct(result.data.content);
    console.log(
      "🚀 ~ file: Search.jsx:14 ~ getProductByKeyworkApi ~ result.data.content:",
      result.data.content
    );
  } catch (err) {
    console.log(
      "🚀 ~ file: Search.jsx:16 ~ getProductByKeyworkApi ~ err:",
      err
    );
  }
};

export default function Search() {
  let [arrProduct, setArrProduct] = useState([]);
  /**
   * cung de lay data truyen qua router - navigatie co keyword = useSearchParams() .get("keyword")
   * Dua du lieu len url : setSearchParams
   */
  let [searchParams, setSearchParams] = useSearchParams();

  let [keyword, setKeyword] = useState(searchParams.get("keyword"));

  //
  useEffect(() => {
    // TH Search component thay doi thi thay doi search trong Search NavBar va url prams(?keyword)

    setSearchParams(
      {
        keyword: keyword,
      },
      () => {
        console.log();
      }
    );
    getProductByKeyworkApi(keyword, setArrProduct);
  }, [keyword]);
  //
  useEffect(() => {
    // TH Search NavBar thay doi thi thay doi search trong component
    setKeyword(searchParams.get("keyword"));
  }, [searchParams.get("keyword")]);
  //
  const handleChange = (e) => {
    let { value, id } = e.target;

    setKeyword(value);
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();

    // goi api thuc thi

    getProductByKeyworkApi(keyword, setArrProduct);
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
            id="keyword"
            onChange={handleChange}
            value={keyword}
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
