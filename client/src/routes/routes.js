import { Contact } from "pages/Contact/Contact";
import { ErrorPage } from "pages/Error/Error-page";
import { Fleet } from "pages/Fleet/Fleet";
import { Home } from "pages/Home/Home";
import { Login } from "pages/Login/Login";
import { Register } from "pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fleet",
    element: <Fleet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);
