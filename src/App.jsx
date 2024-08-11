import { useState } from "react";
import {
  NavSectionDisplay,
  DisplayOutlet,
  FormPage,
  Registration,
} from "./Pages/Index";
import DispalyProduct from "./Components/OutLet/DispalyProduct";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavSectionDisplay />,
    children: [
      {
        index: true,
        element: <DisplayOutlet />,
      },
      {
        path: "/displayProduct/:id",
        element: <DispalyProduct />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/login",
        element: <Registration />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
