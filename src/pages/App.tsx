import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "../components/header/Header";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => prev - 1);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <div className="counter">
          <div className="test">
            <h1>{count}</h1>
          </div>
          <div className="btns">
            <button onClick={inc}>++</button>
            <button onClick={dec}>--</button>
          </div>
        </div>
        <Link to={"/detail"}>details</Link>
        <Outlet />
      </Container>
    </>
  );
};
