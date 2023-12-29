import { App } from "../../pages/App";
import { Auth } from "../../pages/auth/Auth";
import { Detail } from "../../pages/detail/Detail";

export const routers = () => {
  return [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/detail",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/signup",
      element: <Auth />,
    },
  ];
};
