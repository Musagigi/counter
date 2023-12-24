import { useState } from "react";
import "./App.scss";
import { Outlet, Link } from "react-router-dom";
import { Header } from "./header/Header";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => prev - 1);

  return (
    <>
      <Header />
      <Outlet />
      <div className="counter">
        <div className="test">
          <h1>{count}</h1>
        </div>
        <div className="btns">
          <button onClick={inc}>++</button>
          <button onClick={dec}>--</button>
        </div>
      </div>
    </>
  );
};
