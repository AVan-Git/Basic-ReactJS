import React from 'react'
import { useState } from 'react'
import Comment from './Comment';

function UseCallBackDemo() {
    let [like, setLike] = useState(2);
    let [number, setNumber] = useState(20);
  return (
    <div className='m-5'>
        Like: {like} ❤
        
        <br />
        <span style={{cursor:'pointer', color:'red', fontSize:"25px"}} 
            onClick={() => {setLike(++like)}}
        >
            ❤
        </span><span style={{cursor:'pointer', color:'red', fontSize:"25px"}} 
            onClick={() => {setNumber(++number)}}
        >
            😎
        </span>

        <br />
        <br />
        <Comment number={number} />


      
    </div>
  )
}

export default UseCallBackDemo
