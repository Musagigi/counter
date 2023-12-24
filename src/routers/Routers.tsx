import { App } from "../components/App";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signup/SignUp";
import { Detail } from "../pages/detail/Detail";

export const routers = () => {
  return [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
          children: [
            {
              path: "/signup/detail",
              element: <Detail />,
            },
          ],
        },
      ],
    },
  ];
};
