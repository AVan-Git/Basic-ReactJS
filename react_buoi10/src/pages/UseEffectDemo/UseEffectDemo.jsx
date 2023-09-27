//rfc
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectDemo() {
  let [arrProduct, setArrProduct] = useState([]);
  let [count,setCount] = useState(99);

  const getApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    //thanh cong
    promise.then((result) => {
      // console.log("🚀 ~ file: UseEffectDemo.jsx:15 ~ getApi ~ result:", result);
      setArrProduct(result.data.content);
      // console.log("🚀 ~ file: UseEffectDemo.jsx:17 ~ promise.then ~ setArrProduct:", arrProduct)
      
    });

    //that bai
    promise.catch((err) => {
      console.log("🚀 ~ file: UseEffectDemo.jsx:20 ~ getApi ~ err:", err);
    });
  };

  useEffect(() => {
    //nếu muốn chạy một lần thì để mảng ở sau là mảng rỗng
    //useEffect sẽ chạy sau khi render()

    getApi();
   //  setCount(++count); // goi truc tiep no se chayj lien tuc nhu vong lặp (for)
   setTimeout(()=> {
      if (count === 2) {
         setCount(99)
      }else{
         setCount(--count);
      }
      
   }, 1000)
  }, [count]);

  const renderProduct = () => {
   return arrProduct.map((item, index) => {
      return (
         <div className="col-3 p-2" key={index}>
          <img src={item.image} alt="product" className="w-100" />
          <div className="card-body ">
            <h3  style={{height:'80px'}}>{item.name}</h3>
            <p>{item.price} $</p>
            <button className="btn btn-success">Add to card</button>
          </div>
        </div>
      )
   })
  }
  return (
    <div className="container">
      <h2 className="text-center text-danger">Demo Use Effect </h2>
      <hr />
      <h4>ComponentWillunmount (sử dụng useEffect chạy liên tục với biến count )</h4>
         <p>Sale sập sàn sau: {count} giây</p>
      <hr />
      <h4>ComponentDidMount (Sử dụng cho việc load 1 lần sau khi render)</h4>
      <h3>Shoes Shop</h3>
      <div className="row">
        {/* <div className="col-3">
          <img src="https://i.pravatar.cc" alt="product" className="w-100" />
          <div className="card-body">
            <h3>Name</h3>
            <p>1000 $</p>
            <button className="btn btn-success">Add to card</button>
          </div>
        </div> */}

        {renderProduct()}
      </div>
    </div>
  );
}
