import RootLayout from "../Layout/RootLayout";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h1>404 error page not found</h1>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "campaigns",
        element: <h1>All Campaigns</h1>,
      },
      {
        path: "login",
        element: <h1>Login</h1>,
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
        element: <h1>register</h1>,
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
