import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {
  const dispatch = useDispatch();
  //

  const { arrProduct } = useSelector((state) => state.productReducer);
  useEffect(() => {
    if (arrProduct.length === 0) {
      dispatch(getProductApi())
    }
  }, []);

  // render 
  const renderProduct = () => {
    if(arrProduct.length === 0) {
      return <>Không tìm thấy giá trị!</>
    }

    return arrProduct.map((item, index) =>{
      return <div className="col-3 mt-2 " key={index}>
      <Product product={item} />
    </div>
    })
  }
  return (
    <div className="container">
      <h3 className="text-center">Shoes app</h3>
      <div className="row">
        
        {/*  */}
        {renderProduct()}
      </div>
    </div>
  );
}
