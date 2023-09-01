import React, { Component } from 'react'

export default class ProductCard extends Component {



    render() {
        //this.props: thuộc tính có sẵn trong react class component
        //dùng để nhận giá trị từ component cha truyền vào

        const{item} = this.props;
        console.log("🚀 ~ file: ProductCard.jsx:12 ~ ProductCard ~ render ~ item:", item)
/*
        so sánh: state & props

        giống nhau: Đều là thuộc tính có sẵn của react class 
        component dùng để binding dữ Liệu ra giao dien.
        
        khác nhau: state có thể gán lại giá trị thông qua 
        phương thức setState, props không thể gán lại giá trị 
        (readonly) dùng để nhận giá trị từ 
        component cha truyền vào.


        optional chaining: ? => nếu có thì làm không thì bỏ qua
*/

        return (
            <>
                <div className="card text-white bg-primary">
                    {/* optional chaining item?.age */}
                    <img className="card-img-top" src={`https://i.pravatar.cc/?u=${item?.age}`} width={100} alt="Title" />
                    <div className="card-body">
                        {/* optional chaining */}
                        <h4 className="card-title">{item?.name}</h4> 
                        {/* optional chaining */}
                        <p className="card-text">{item?.age}</p>
                    </div>
                </div>

            </>
        )
    }
}
