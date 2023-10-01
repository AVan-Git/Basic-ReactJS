import React, { memo } from "react";

function Cart(props) {
  //   console.log("🚀 ~ file: Cart.jsx:4 ~ Cart ~ props:", props);

  console.log("cart");
  let arrCart  = props.cart;

  return (
    <div className=" container">
      <div class="table-responsive">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr class="">
              <td scope="row">R1C1</td>
              <td>R1C2</td>
              <td>R1C3</td>
            </tr> */}
            {arrCart.map((item, index) => {
              return (
                <tr class="" key={index}>
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export default Cart;
export default memo(Cart);
