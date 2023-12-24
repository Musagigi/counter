import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>
        <Link to={"/"}>logo</Link>
      </div>
      <ul>
        <li>
          <Link to={"/login"}>войти</Link>
        </li>
        <li>
          <Link to={"/signup"}>зарегистрироваться</Link>
        </li>
      </ul>
    </>
  );
};
