import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setArrProductAction } from "../../redux/reducers/productReducer";

export default function HomeReducer() {
  // let [arrProduct, setArrProduct] = useState([]);

  //Redux
  const { arrProduct } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const getApiProduct = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      // console.log("🚀 ~ file: HomeReducer.jsx:14 ~ getApiProduct ~ result:", result);
      // setArrProduct(result.data.content);

      // 2. dispatch len redux
      /**
       * action = {
       *  type:'productReducer/setArrProductAction',
       *  payload:result.data.content
       * }
       */
      const action = setArrProductAction(result.data.content);

      dispatch(action);
    } catch (err) {
      console.log("🚀 ~ file: HomeReducer.jsx:13 ~ getApiProduct ~ err:", err);
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
