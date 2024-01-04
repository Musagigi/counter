import { Link } from "react-router-dom";

export const Header = () => {
  let user: string[][] = null;

  if (localStorage.length > 0) {
    let logData = localStorage.getItem("log");

    if (logData) {
      user = Object.entries(JSON.parse(logData));
    }
  }

  return (
    <header>
      <div>
        <Link to={"/"}>logo</Link>
      </div>

      {user ? (
        <ul>
          <li>{user[0][1]}</li>
          <li>
            <Link to={"/favorites"}>избранное</Link>
          </li>
          <li>
            <Link to={"/history"}>история</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"/login"}>войти</Link>
          </li>
          <li>
            <Link to={"/signup"}>зарегистрироваться</Link>
          </li>
        </ul>
      )}
    </header>
  );
};
