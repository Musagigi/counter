import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routers/Routers";

const router = createBrowserRouter(routers());

const root = document.getElementById("root");
createRoot(root).render(<RouterProvider router={router} />);
