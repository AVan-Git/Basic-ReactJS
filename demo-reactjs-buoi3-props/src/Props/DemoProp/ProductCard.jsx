import React, { Component } from 'react'

export default class ProductCard extends Component {



    render() {
        //this.props: thuộc tính có sẵn trong react class component
        //dùng để nhận giá trị từ component cha truyền vào

        const{name, age} = this.props;
/*
        so sánh: state & props

        giống nhau: Đều là thuộc tính có sẵn của react class 
        component dùng để binding dữ Liệu ra giao dien.
        
        khác nhau: state có thể gán lại giá trị thông qua 
        phương thức setState, props không thể gán lại giá trị 
        (readonly) dùng để nhận giá trị từ 
        component cha truyền vào.
*/

        return (
            <>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={`https://i.pravatar.cc/?u=${age}`} width={100} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{age}</p>
                    </div>
                </div>

            </>
        )
    }
}
