import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

export default function DemoAnimation() {
  let [toggle, setToggle] = useState(true);

  const [props, api] = useSpring(() => ({ opacity: 1, color:'red' , fontSize: 20  }));
  // Update spring with new props
//   api.start({ opacity: 0, color:'blue' });
  // Stop animation
  //   api.stop();

  useEffect(() => {
    return () => { // animation luon hoat dong khi doi trang len phair stop() no
        api.stop()
    }
    
  },[])

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
            if (toggle) {
                api.start({ opacity: 0, color:'blue', fontSize: 10 });
            }else {
                api.start({ opacity: 1, color:'red' , fontSize: 30 });
            }

          setToggle(!toggle);
        }}
        className="btn btn-primary my-2 "
      >
        Animation
      </button>
      
      <animated.div style={props}>Hello World</animated.div>
    </div>
  );
}
