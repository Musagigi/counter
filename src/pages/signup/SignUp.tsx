import { Link, Outlet } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <h1>зарегистрироваться</h1>
      <Link to={"/signup/detail"}>details</Link>
      <Outlet />
    </>
  );
};
