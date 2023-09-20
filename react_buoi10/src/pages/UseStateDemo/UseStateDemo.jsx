import React, { useState } from "react";

export default function UseStateDemo() {
  let [number, setNumber] = useState(12);
  let [like,setLike] = useState(1)
  const hanldClick = () => {
    setNumber(++number);
  };

  return (
    <div className="container">
      <h2 className="text-center text-danger">UseStateDemo</h2>
      <hr />
      <h3>Number: {number}</h3>
      <button
        onClick={() => {
          hanldClick();
        }}
        type="button"
        class="btn btn-primary"
      >
        +
      </button>

      <hr />
      <div>
        <div className="card text-white bg-info mt-2 w-25">
          <img
            className="card-img-top"
            src="https://i.pravatar.cc/?u=2"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Name: Văn Võ</h4>
            <p className="card-text">Age: 20</p>
            <button onClick={() => {
                setLike(++like)
            }} className="btn btn-danger ">
              {like} <i className="fa fa-heart fa-1x  ms-2" color='#fc030b' ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
