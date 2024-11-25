import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import User from "./components/routes/Users";
import Home from "./components/routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <User />,
      },
    ],
  },
]);

export default router;
