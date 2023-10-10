import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi, setArrProductAction } from "../../redux/reducers/productReducer";

export default function HomeReducer() {
  // let [arrProduct, setArrProduct] = useState([]);

  //Redux
  const { arrProduct } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const getApiProduct = async () => {
    /**
     * action dang 1 :
     *    action = {
     *      type:action_name,
     *        payload:data
     * }
     *
     * */

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

  const getApiProduct_TH2_Redux = async () => {
    /**
     * action dang 2 : co trong redux toolkit
         action = (dispatch2, getState) => {
            // logic xử lý ở đây sau đó có dữ liệu  sẽ dùng tham số dispatch2 ( này ở chỗ middleware -> redux || img minh hoa middleware),  để đưa lên redux hoặc thực hiện tiếp 1 logic khác
         }
     *
     * */
         // 4. chuyen fun sang productReducer.jsx de quan ly
    // const action = async (dispatch2) => {
    //   //su ly api o day
    //   try {
    //     let result = await axios({
    //       url: "https://shop.cyberlearn.vn/api/Product",
    //       method: "GET",
    //     });
    //     // 3. dispatch len redux
    //     /**
    //      * action = {
    //      *  type:'productReducer/setArrProductAction',
    //      *  payload:result.data.content
    //      * }
    //      */
    //     const action = setArrProductAction(result.data.content);

    //     dispatch2(action);
    //   } catch (error) {
    //     console.log("🚀 ~ file: HomeReducer.jsx:62 ~ action ~ error:", error);
    //   }
    // };

    const action = getProductApi;
      // 3. dispath action chinh
      dispatch(action);
  };

  useEffect(() => {
    getApiProduct_TH2_Redux();
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
              <NavLink to={`/detail-redux/${item.id}`} className="btn btn-primary">
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
