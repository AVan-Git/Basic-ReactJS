//rcc
import React, { Component } from "react";

export default class FromProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      productType: "mobile",
      description: "",
      img: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
    },
  };

  // fun bat su kien nhap o input
  handleChange = (event) => {
    // event.target // lay data trong input
    let { value, id, name } = event.target;
    let dataType = event.target.getAttribute("data-type");

    // debugger;
    // this.setState({ [id]: value }, () => { console.log() })

    // su ly product info
    let newValue = this.state.productInfo;
    newValue[id] = value;
    // su ly error
    let newErr = this.state.error;
    let messErr = "";
    if (value.trim() === "") {
      messErr = id + " - không được để trống !";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messErr = id + " phải là số!!";
        }
      }
    }
    newErr[id] = messErr;

    // setState
    this.setState(
      {
        productInfo: newValue,
        error: newErr,
      },
      () => {
        console.log();
      }
    );
  };

  // fun -chan su kien reload cua browser
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    // khi nguoi dung bam  nut submit => gui du lieu nguoi dung nhap từ state => ra hàm addProduct
    this.props.addProduct(this.state.productInfo);
  };

  /**
   * Su dung getDerivedStateFromProps() can thieu vao qua trinh render()
   * @param {*} newProps prop moi
   * @param {*} currentState
   */
  static getDerivedStateFromProps(newProps, currentState) {
   
    if (newProps.productEdit.id !== currentState.productInfo.id) {
      console.log('getDerivedStateFromProps()');
      currentState.productInfo = newProps.productEdit;

      return { ...currentState };
    }
    return null;
  }

  render() {
    let { id, name, price, img, description, productType } =
      this.state.productInfo;

      let {updateProduct} = this.props;
    return (
      <>
        <form className="card" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-warning">Create Product</div>
          <div className="card-body row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input
                  className="form-control"
                  type="text"
                  name="mã"
                  id="id"
                  onInput={this.handleChange}
                  value={id}
                />
                <p className="text-danger">{this.state.error.id}</p>
              </div>
              <div className="form-group">
                <p>name</p>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.name}</p>
              </div>
              <div className="form-group">
                <p>price</p>
                <input
                  data-type="number"
                  className="form-control"
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.price}</p>
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <p>image</p>
                <input
                  className="form-control"
                  name="img"
                  id="img"
                  value={img}
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.img}</p>
              </div>

              <div className="form-group">
                <p>product type</p>
                <select
                  name="productType"
                  id="productType"
                  value={productType}
                  className="form-control"
                  onInput={this.handleChange}
                >
                  <option value={"mobile"}>mobile</option>
                  <option value={"tablet"}>tablet</option>
                  <option value={"laptop"}>laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>description</p>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  value={description}
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.description}</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button class="btn btn-success mx-2">Create</button>
            <button 
               onClick={() => updateProduct({...this.state.productInfo})}
            type="button" class="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </>
    );
  }
}
