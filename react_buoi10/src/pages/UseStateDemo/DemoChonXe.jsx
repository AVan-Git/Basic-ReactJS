import React, { useState } from "react";

export default function DemoChonXe() {
    let [color, setColor] = useState("./img/products/car_black.webp");
    const changeColor = (val) => {
        let str = `./img/products/car_${val}.webp`;
        setColor(str);
    }
  return (
    <div className="row">
      <div className="col-6">
        <img src={color} className="border" alt="..." width={500} />
      </div>
      <div className="col-6">
        <button onClick={() => {changeColor('blue')}} type="button" className="mx-2 btn btn-primary">
          Blue
        </button>
        <button onClick={() => {changeColor('white')}} type="button" className="mx-2 btn btn-light border">
          White
        </button>
        <button onClick={() => {changeColor('yellow')}} type="button" className="mx-2 btn btn-warning">
          Yellow
        </button>
        <button onClick={() => {changeColor('black')}} type="button" className="mx-2 btn btn-dark">
          Black
        </button>
      </div>
    </div>
  );
}
