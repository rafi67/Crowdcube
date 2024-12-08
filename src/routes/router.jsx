import RootLayout from "../Layout/RootLayout";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h1>404 error page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "campaigns",
        element: <h1>All Campaigns</h1>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addCampaign",
        element: (
          <PrivateRoute>
            <h1>Add Campaign</h1>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "myDonation",
        element: (
          <PrivateRoute>
            <h1>My Donation</h1>
          </PrivateRoute>
        ),
      },
      {
        path: "myCampaign",
        element: (
          <PrivateRoute>
            <h1>My Campaign</h1>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
