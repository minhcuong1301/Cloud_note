import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import Layout from "../pages/layout";
import Page_login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "/login",
    element: <Page_login />,
  },
]);
export default router;
