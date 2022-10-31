import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
// import Home from "./pages/Home/Home";
// import List from "./pages/List/List";
// import NewList from "./pages/NewList/NewList";
import SecretSanta from "./pages/SecretSanta/SecretSanta";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/list",
  //   element: <List />,
  // },
  // {
  //   path: "/newlist",
  //   element: <NewList />,
  // },
  {
    path: "/",
    element: <SecretSanta />,
  },
  {
    path: "*",
    element: <h1>PAGE NOT FOUND!</h1>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
