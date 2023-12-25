import { useLocation } from "react-router-dom";
import { Login } from "../../components/login/Login";
import { SignUp } from "../../components/signup/SignUp";

export const Auth = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/login":
      return <Login />;
    case "/signup":
      return <SignUp />;
  }
};
