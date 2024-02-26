import React, { useEffect } from "react";

function Product(props) {

  const {product} = props;


  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.image}
        alt="..."
      />
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price}$</p>
        <button type="button" className="btn btn-primary">
          Add to Cart
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
