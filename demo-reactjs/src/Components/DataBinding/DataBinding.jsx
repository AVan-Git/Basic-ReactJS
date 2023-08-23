import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/id/2/200/200',
        // ima:'https://picsum.photos/200/200'
    }

    renderCardProduct = () => {
        return (
            < div className="card text-white bg-primary" >
                <img className="p-3" src={this.product.img} alt="..." width={200} />
                <div className="card-body">
                    <h4 className="card-title">{this.product.name}</h4>
                    <p className="card-text">{this.product.price}</p>
                </div>
            </ div>
        )

    }

    render() {

        let title = "Cybersorf";

        let person = {
            name: 'Van',
            age: 25
        }

        const renderText = (tenLop) => {
            return `lop: ${tenLop}`
        }

        return (
            <div className='container'>
                <h1>HI Hoang</h1>
                <p id='pText'>{title}</p>
                <hr />
                <div className="card w-25 mt-2">
                    <img src='https://i.pravatar.cc?u=1' alt='...' />
                    <div className="card-body">
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                    </div>
                </div>
                <hr />
                <div className="card w-25 text-white bg-primary">
                    <img className="card-img-top" src="https://i.pravatar.cc?u=1" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{person.name}</h4>
                        <p className="card-text">{person.age}</p>
                    </div>
                </div>
                {/*  */}

                <h3>Binding gọi hàm : chỗ gọi hàm sẽ hiện thị những gì mà hàm đó return. Cú pháp: {`{goiHam()}`}</h3>
                {renderText('12K1')}

                <h3>Binding thuoc tinh: </h3>
                <div className="alert alert-primary">
                    Product info:
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <img src={this.product.img} alt='...' width={200} />
                    <p>price: {this.product.price}</p>
                </div>

                {/* goi phuong thuc o ngoai phai co this.tenGoi()  */}
                <h3>Card product</h3>
                {this.renderCardProduct()}
            </div>
        )
    }
}
