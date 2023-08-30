import React, { Component } from 'react'

const data = [
    {
        id: '1',
        name: 'White Car',
        price: '1200',
        imgCar: './img/products/car_white.webp'
    },
    {
        id: '2',
        name: 'Black Car',
        price: '1200',
        imgCar: './img/products/car_black.webp'
    },
    {
        id: '3',
        name: 'Blue Car',
        price: '1200',
        imgCar: './img/products/car_blue.webp'
    },
    {
        id: '4',
        name: 'Yellow Car',
        price: '1200',
        imgCar: './img/products/car_yellow.jpg'
    }
]

export default class RenderWithMap extends Component {


    // Cachs 1
    RanderWithProduct = () => {

        const arrProductJsx = [];
        data.forEach(item => {
            // console.log("🚀 ~ file: RenderWithMap.jsx:38 ~ RenderWithMap ~ item:", item)

            let tr = <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img src={item.imgCar} alt='...' width={100}></img></td>
            </tr>

            arrProductJsx.push(tr)  /// [<tr></tr>,<tr></tr>,<tr></tr>]
        })

        // return [<tr></tr>,<tr></tr>,<tr></tr>]
        return arrProductJsx
    }

    // cach 2
    RanderWithProduct2 = () => {
        let arrProduct = data.map((item, index) => {
            return <tr key={index}>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img src={item.imgCar} alt='...' width={100}></img></td>
            </tr>
        })

        return arrProduct;

    }

    render() {
        return (
            <div className='container'>
                <h2 className="text-center text-danger mx-5">RenderWithMap</h2>
                <hr></hr>
                <div className="table-responsive">

                    <table className="table table-primary">
                        <thead classname="text-center">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr className>
                                <td scope="row">1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                                <td>R1C3</td>
                            </tr> */}

                            {/*  */}
                            {this.RanderWithProduct2()}

                        </tbody>
                    </table>

                </div>


            </div>
        )
    }
}
