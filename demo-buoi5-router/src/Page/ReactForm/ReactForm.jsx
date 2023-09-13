//rcc
import React, { Component } from "react";
import FromProduct from "./FromProduct";
import TableProduct from "./TableProduct";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: "01",
        name: "Product 1",
        price: "1000",
        productType: "mobile",
        description: "des 1",
        img: "https://picsum.photos/id/2/50/50",
      },
      {
        id: "02",
        name: "Product 2",
        price: "1500",
        productType: "tablet",
        description: "des 2",
        img: "https://picsum.photos/id/1/50/50",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "0",
      productType: "",
      description: "",
      img: "",
    },
  };

  //
  updateProduct = (newProduct) => {
    console.log("🚀 ~ updateProduct()")
    let prod = this.state.arrProduct.filter((p) => p.id == newProduct.id);
    if (prod) {
      prod.name = newProduct.name;
      prod.price = newProduct.price;
      prod.img = newProduct.img;
      prod.productType = newProduct.productType;
      prod.description = newProduct.description;
    }
    // setState
    this.setState(
      {
        arrProduct: this.state.arrProduct,
      },
      () => {
        console.log();
      }
    );
  };

  //
  editProduct = (productClick) => {
    console.log("🚀 ~ editProduct()");
    this.setState({ productEdit: productClick }, () => {
      console.log();
    });
  };

  //
  addProduct = (newProduct) => {
    console.log("addProduct()");
    // console.log("🚀 ~ file: ReactForm.jsx:16 ~ ReactForm ~ newProduct:", newProduct)

    //  this.state.arrProduct.push(newProduct)
    let arrUpdate = [...this.state.arrProduct, { ...newProduct }];
    this.setState(
      {
        arrProduct: arrUpdate,
      },
      () => {
        console.log();
        this.luuStore();
      }
    );
  };

  // delProduct
  delProduct = (idDel) => {
    console.log("delProduct()");

    //sử dung filter trong array de xoa
    let arrNew = this.state.arrProduct.filter((item) => item.id !== idDel);

    this.setState({ arrProduct: arrNew }, () => {
      console.log();
      this.luuStore();
    });
  };

  //luu store
  luuStore() {
    //chuyen thanh chuoi
    let val = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", val);
  }

  // Lay store
  layStote() {
    //kiem tra local co data khong
    if (localStorage.getItem("arrProduct")) {
      // chuyển đổi data từ string về JSON
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProduct;
    }
    return [];
  }

  // su dung hamf de can thiep lay data truoc khi chạy đến render
  // static getDerivedStateFromProps(newProps, currentState) {
  //   console.log('getDrivedStateFromProps');

  //   //kiem tra local co data khong
  //   if (localStorage.getItem('arrProduct')) {
  //     // chuyển đổi data từ string về JSON
  //     currentState.arrProduct = JSON.parse(localStorage.getItem('arrProduct'))
  //     return currentState
  //   }
  //   return null;
  // }

  render() {
    return (
      <div className="container">
        <h2 className="text-center text-danger">Product Management</h2>
        <hr />
        <FromProduct
          updateProduct={this.updateProduct}
          addProduct={this.addProduct}
          productEdit={this.state.productEdit}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }

  componentDidMount() {
    // ham này sẽ được gọi sau hàm render
    // co hàm  getDerivedStateFromProps() lay dataStore len không can componentDidMount()
    // this.setState({arrProduct: this.layStote()}, () => {console.log();})
  }
}
