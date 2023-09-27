import React, { useCallback } from 'react'
import { useState } from 'react'
import Comment from './Comment';

function UseCallBackDemo() {
    let [like, setLike] = useState(2);
    let [number, setNumber] = useState(20);


    const renderLike = () => {
        return <p>Bạn dã like: {like}</p>
    }

    //Ham useCallback sẽ cache lại hàm renderLike sau mỗi lần setState render, Chỉ tạo mới hàm  renderLike khi like thay đổi
    const renderLikeCallBack = useCallback(renderLike, [like]);
  return (
    <div className='m-5'>
        Like: {like} ❤ --- Number: {number}
        
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
        <Comment like={like} renderLike = {renderLikeCallBack} />


      
    </div>
  )
}

export default UseCallBackDemo
