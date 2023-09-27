import React, {memo}  from 'react'

 function Comment(props) {
    let {number} = props
    console.log("comment");
  return (
    <div>
        Comment Number: {number}
      <br />
      <textarea className='w-50 form-control' name="" id="" cols="30" rows="10"></textarea>
      <button type="button" class="btn btn-primary">Send</button>
    </div>
  )
}


export default memo(Comment);