import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPage from "../pages/home/LandingPage";
import Layout2 from "../components/common/Layout2";
import DetailedPage from "../pages/detail/DetailedPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/detailed-page",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <DetailedPage />,
      },
    ],
  },
]);
