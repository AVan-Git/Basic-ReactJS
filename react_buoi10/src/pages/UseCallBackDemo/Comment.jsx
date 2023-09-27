import React, {memo}  from 'react'

 function Comment(props) {
    let {like, renderLike} = props
    console.log("comment");
  return (
    <div>
        Comment like: {like}
        {renderLike()}
      <br />
      <textarea className='w-50 form-control' name="" id="" cols="30" rows="10"></textarea>
      <button type="button" class="btn btn-primary">Send</button>
    </div>
  )
}


export default memo(Comment);