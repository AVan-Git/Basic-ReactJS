import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  let [arrProduct, setArrProduct] = useState([]);
  // console.log("🚀 ~ file: Home.jsx:7 ~ Home ~ arrProduct:", arrProduct);

  const getApiProduct = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      // console.log("🚀 ~ file: Home.jsx:14 ~ getApiProduct ~ result:", result);
      setArrProduct(result.data.content);
    } catch (err) {
      console.log("🚀 ~ file: Home.jsx:13 ~ getApiProduct ~ err:", err);
    }
  };

  useEffect(() => {
    getApiProduct();
  }, []);

  //
  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-md-3 mt-2" key={index}>
          <div className="card">
            <img className="card-img-top" src={item.image} alt="Shoe" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price} $</p>
              <NavLink to={`/detail/${item.id}`} className="btn btn-primary">
                View Detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h2 className="text-danger m-2">Shoes app</h2>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
