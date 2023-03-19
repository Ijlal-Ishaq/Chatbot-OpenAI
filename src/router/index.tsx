import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const Index: FC = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
      ],
    },
  ]);
};

export default Index;
