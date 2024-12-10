import RootLayout from "../Layout/RootLayout";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AllCampaigns from "../Pages/AllCampaigns";
import AddCampaign from "../Pages/AddCampaign";
import ls from "../localStorage/localStorage";

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
        path: "allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch("http://localhost:5000/getAllCampaigns"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
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
            <AllCampaigns></AllCampaigns>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/getMyCampaign/${ls.getEmail()}`),
      },
    ],
  },
]);

export default router;
