import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import Home from "./routes/home.jsx";
import NormalLayout from "./layouts/normal-layout.jsx";

const router = createBrowserRouter([
  // layout used for all protected pages
  {
    path: "/",
    element: <NormalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // example route
      //{
      //  path: "login",
      //  element: <Login />,
      //},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
