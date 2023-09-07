//rcc
import React, { Component } from 'react'
import FromProduct from './FromProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      { id: '01', name: 'Product 1', price: '1000', productType: 'mobile', description: 'des 1', img: 'https://picsum.photos/id/2/50/50' },
      { id: '02', name: 'Product 2', price: '1500', productType: 'tablet', description: 'des 2', img: 'https://picsum.photos/id/1/50/50' },
    ]
  }

  //
  addProduct = (newProduct) => {
    console.log('addProduct()');
    // console.log("🚀 ~ file: ReactForm.jsx:16 ~ ReactForm ~ newProduct:", newProduct)

    //  this.state.arrProduct.push(newProduct)  
    let arrUpdate = [...this.state.arrProduct, { ...newProduct }]
    this.setState(
      {
        arrProduct: arrUpdate
      }, () => {
        console.log();
        this.luuStore()
      }
    )
  }

  // delProduct
  delProduct = (idDel) => {
    console.log('delProduct()')

    //sử dung filter trong array de xoa
    let arrNew = this.state.arrProduct.filter(item => item.id !== idDel)

    this.setState({ arrProduct: arrNew }, () => {
      console.log();
      this.luuStore()
    })
  }

  //luu store
  luuStore() {
    //chuyen thanh chuoi
    let val = JSON.stringify(this.state.arrProduct)
    localStorage.setItem('arrProduct', val);
  }

  // Lay store
  layStote() {
    //kiem tra local co data khong
    if (localStorage.getItem('arrProduct')) {
      // chuyển đổi data từ string về JSON
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'))
      return arrProduct      
    }
    return [];
  }

  render() {
    return (
      <div className='container' >
        <h2 className="text-center text-danger">Product Management</h2>
        <hr />
        <FromProduct addProduct={this.addProduct} />
        <TableProduct arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
        />

      </div>
    )
  }


  componentDidMount() {
    // ham này sẽ được gọi sau hàm render


    this.setState({arrProduct: this.layStote()}, () => {console.log();})
  }
}
