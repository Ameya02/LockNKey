import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./pages/Signup.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login.jsx";
import RGB from "./pages/RGB.jsx";
import Clicks from "./pages/clicks.jsx";
import Faceid from "./pages/Faceid";
import Facelogin from "./face-login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/rgb",
    element: <RGB />,
  },
  {
    path: "/Clicks",
    element: <Clicks />,
  },
  {
    path: "/Faceid",
    element: <Faceid />,
  },

  {
    path: "/Facelogin",
    element: <Facelogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);