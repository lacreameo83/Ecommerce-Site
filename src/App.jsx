import { useState } from "react";
import {
  NavSectionDisplay,
  DisplayOutlet,
  FormPage,
  Registration,
  Error,
  PaymentDisplay,
  CardDisplay,
} from "./Pages/Index";
import DispalyProduct from "./Components/OutLet/DispalyProduct";
import ProtectedRoute from "./Utilities/ProtectectRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavSectionDisplay />,
    errorElement: <Error />,
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
  {
    path: "/payment",
    element: <PaymentDisplay />,
  },
  {
    path: "/card",
    element: (
      <ProtectedRoute>
        <CardDisplay />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
