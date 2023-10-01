import React, {  useMemo, useState } from 'react'
import Cart from './Cart';

function UseMemoDemo() {
    let [like, setLike] = useState(1);
    let cart = [
        {id:1, name: "iphone", price: 1000},
        {id:2, name: "HTC phone", price: 2000},
        {id:3, name: "LG phone", price: 3000},
    ]

    const cartMemo = useMemo(()=> cart, []);
  return (
    <div className='container'>
        Like: {like} ❤
        <br />
        <span style={{cursor:'pointer', color:'red', fontSize:"25px"}} 
            onClick={() => {setLike(++like)}}
        >
            ❤
        </span>

        <br />
        <br />
        {/* <Cart cart={cart} /> */}
        <Cart cart={cartMemo} />
      
    </div>
  )
}

export default UseMemoDemo
