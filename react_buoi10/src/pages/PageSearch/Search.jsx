import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

// cal API
const getProductByKeyworkApi = async (value, setArrProduct) => {
    console.log('3.1.2 -> goi api sau lan dau tien load');
  try {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/product?keyword=${value}`,
      method: "GET",
    });
    setArrProduct(result.data.content);
    console.log(
      '3.1.3 sau khi api thanh cong -> state thay doi -> giao dien render lai(ket thuc lan 1)'
    );
    //3.4
  } catch (err) {
    console.log(
      "🚀 ~ file: Search.jsx:16 ~ getProductByKeyworkApi ~ err:",
      err
    );
  }
};

let timeout = null;

export default function Search() {
  let [arrProduct, setArrProduct] = useState([]);
  /**
   * cung de lay data truyen qua router - navigatie co keyword = useSearchParams() .get("keyword")
   * Dua du lieu len url : setSearchParams
   */
  let [searchParams, setSearchParams] = useSearchParams();

//   let [keyword, setKeyword] = useState(searchParams.get("keyword"));

  // 3.5 : clear
  if (timeout !== null) {
    clearTimeout(timeout)
  }
  //
  /*
  useEffect(() => {
    // TH Search component thay doi thi thay doi search trong Search NavBar va url prams(?keyword)

    //2. Chánh TH Call lien tuc - setTimeout sau 1s
    setTimeout(() => {
      setSearchParams(
        {
          keyword: searchParams.get("keyword"),
        },
        () => {
          console.log();
        }
      );
      getProductByKeyworkApi(keyword, setArrProduct);
    }, 1000);
  }, [keyword]);
  */
  //
  useEffect(() => {
    // TH Search NavBar thay doi thi thay doi search trong component
    // setKeyword(searchParams.get("keyword"));

    ///3 - luong di
    //3.1 khi load trang thi ham nay goi api 1 lan
    console.log('3.1.1 khi load trang thi ham nay goi api 1 lan');
    // 3.3
    //2. Chánh TH Call lien tuc - setTimeout sau 1s
    timeout = setTimeout(() => {
        let keyword =searchParams.get('keyword');
        if ( keyword !== null) {
        getProductByKeyworkApi(keyword, setArrProduct);
        }
      }, 1000);

  }, [searchParams.get("keyword")]); // 2.1 khi params url thay doi thi ham nay se duoc kich hoat
  //
  const handleChange = (e) => {
    console.log('3.2 khi nguoi dung go tren thanh search thi lay gia tri value gan vao thanh url');

    let { value } = e.target;
    
    // lam thay doi url & kich useEffect chay lan 2
    console.log('3.2 lam thay doi url & kich useEffect chay lan 2');
    setSearchParams(
        {
          keyword: value,
        },
        () => {
          console.log();
        }
      );
  };
  //

  //
  const handleSubmit = (e) => {
    e.preventDefault();

    // goi api thuc thi
    let keyword =searchParams.get('keyword');
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
            value={searchParams.get("keyword")}
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
