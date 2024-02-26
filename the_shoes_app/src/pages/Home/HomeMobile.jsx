import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";
import { NavLink } from "react-router-dom";

export default function HomeMobile() {
  const dispatch = useDispatch();
  //

  const { arrProduct } = useSelector((state) => state.productReducer);
  useEffect(() => {
    if (arrProduct.length === 0) {
      dispatch(getProductApi());
    }
  }, []);

  // render
  const renderProduct = () => {
    if (arrProduct.length === 0) {
      return <>Không tìm thấy giá trị!</>;
    }

    return arrProduct.map((item, index) => {
      return (
        <div className="d-flex mt-2" key={index}>
          {/* <Product product={item} /> */}
          <div className="w-25">
            <img className="w-100" src={item.image} alt="..." />
          </div>
          <div className="w-75">
            <h3>{item.name}</h3>
            <p>{item.price}$</p>
            <NavLink to={`/detail/${item.id}`} className="btn btn-dark">
              Detail
            </NavLink>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Shoes app</h3>

      {/*  */}
      {renderProduct()}
    </div>
  );
}
