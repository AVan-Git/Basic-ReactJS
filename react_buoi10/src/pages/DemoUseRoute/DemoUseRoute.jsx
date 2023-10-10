import React, { useEffect, useState } from "react";
import useRoute from "../../hooks/useRoute";
import { useCookie } from "react-use";

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [searchParams, setSearchParams],
  } = useRoute();

  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
}
