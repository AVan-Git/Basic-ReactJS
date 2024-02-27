import React, { useEffect, useState } from "react";

function ResponsiveItem(props) {
  // componet && componentMobile

  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // khi thay doi screen thi reload lai
  useEffect(() => {
    const setWidth = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = setWidth;

    //khi chuyển qua 1 route khac thi phải xóa cái này
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  if (screen.width < 768 && props.componentMobile) {
    // load mobile
    return <props.componentMobile />;
  }
  // nguoc\ lai load component thuong

  return <props.component />;
}

export default ResponsiveItem;
