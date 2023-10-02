import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
  // sd useParams de nhan data truyen toi theo router
  const params = useParams();

  let [productDetail, setProductDetail] = useState({});

  const getbyIdApi = async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/product/getbyid?id=" + params.id,
        method: "GET",
      });
      // console.log(result);
      setProductDetail(result.data.content);
      console.log("🚀 ~ file: Detail.jsx:19 ~ getbyIdApi ~ result.data.content:", result.data.content)
    } catch (error) {
      console.log("🚀 ~ file: Detail.jsx:13 ~ getbyIdApi ~ error:", error);
    }
  };

  useEffect(() => {
    // chay 2 TH1: dau tien load page
    getbyIdApi();
    // TH2: params.id thay doi
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-4">
          <img className="w-100" src={productDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button type="button" class="btn btn-success">
            Add to card
          </button>
        </div>
      </div>

      <hr />

      <div className="mt-3">
        <h3>Related product</h3>
        <div className="row">
          {/* <div className="col-md-3 mt-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/200"
                alt="Shoe"
              />
              <div className="card-body">
                <h4 className="card-title">name</h4>
                <p className="card-text">preice $</p>
                
                <button type="button" class="btn btn-primary">
                  View Detail
                </button>
              </div>
            </div>
          </div> */}
              {/* 
                - khi load lay dau tien thi productDetail chua co data dan den viec map owr day bi lỗi
                - fix bagn dấu ? 
                - ?: toán tử optiona chainning: nếu có thuộc tính đó thì mới chấm tiếp phương thức hoặc tính tiếp theo được, không có  thì bỏ qua.
              */}
          {productDetail.relatedProducts?.map((item, index )=> {
            return (
              <div className="col-md-3 mt-2">
            <div className="card">
              <img
                className="card-img-top"
                src={item.image}
                alt="Shoe"
              />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price} $</p>
                <NavLink to={`/detail/${item.id}`} className="btn btn-primary">
                View Detail
              </NavLink>
                {/* <button type="button" class="btn btn-primary">
                  View Detail
                </button> */}
              </div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
