//rfc
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../redux/reducers/facebookReducer";

function DemoFacebookApp(props) {

    const {arrComment} = useSelector((state) => state.facebookReducer)

    const dispatch = useDispatch();
    const useComment = useRef({name:'', content:''});//userComment

    const handleChangeComment = (e) => {
        let {id, value} = e.target;
        useComment.current[id] = value
        console.log("🚀 ~ file: DemoFacebookApp.jsx:16 ~ handleChangeComment ~ useComment:", useComment)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let comment = {...useComment.current};//để thay doi tro tránh TH luu khong được
        const action = addComment(comment) // .current để lấy data trong useRef
        /**
         *  action = {
         *  type: "facebookReducer/faceReducer"
         *  payload:{name:'', content:''}
         * }
         */
        dispatch(action);
    }

    const renderComment = () => {
        return  arrComment.map((item, index ) => {
            return (
                <div className="d-flex my-2" key={index} >
                <div className="avatar" style={{ width: 80 }}>
                    <img
                      className="card-img-top w-100"
                      src={`https://i.pravatar.cc?u=${item.name}`}                      alt="..."
                     
                    />
                </div>
                <div className="content mx-2" >
                  <h4 className="card-title ">{item.name}</h4>
                  <p className="card-text">{item.content}</p>
                </div>
            </div>
            )
        })
    }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header" >
          {/* <div className="d-flex my-2" >
              <div className="avatar" style={{ width: 80 }}>
                  <img
                    className="card-img-top w-100"
                    src="https://i.pravatar.cc?u=1"
                    alt="..."
                   
                  />
              </div>
              <div className="content mx-2" >
                <h4 className="card-title ">mentor</h4>
                <p className="card-text">Text</p>
              </div>
          </div> */}

          {renderComment()}
        </div>
        <div className="card-body">
          <div className="mb-3 form-group">
            <label htmlFor className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id = 'name'
              aria-describedby="helpId"
              placeholder="name..."
              onChange={handleChangeComment}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor className="form-label">
              content
            </label>
            <input
              type="text"
              className="form-control"
              id = 'content'
              aria-describedby="helpId"
              placeholder="content..."
              onChange={handleChangeComment}
            />
          </div>
          <div className="mb-3 form-group">
            <button type="submit" class="btn btn-primary">Send</button>

          </div>

        </div>
      </div>
    </form>
  );
}


export default DemoFacebookApp;
