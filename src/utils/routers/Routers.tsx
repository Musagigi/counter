import { App } from "../../App";
import { Auth } from "../../pages/auth/Auth";
import { Detail } from "../../pages/detail/Detail";
import { Favorites } from "../../pages/favorites/Favorites";
import { History } from "../../pages/history/History";

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
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ];
};
