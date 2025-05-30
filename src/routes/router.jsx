import RootLayout from "../Layout/RootLayout";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AllCampaigns from "../Pages/AllCampaigns";
import AddCampaign from "../Pages/AddCampaign";
import ls from "../localStorage/localStorage";
import MyCampaign from "../Pages/MyCampaign";
import UpdateCampaign from "../Pages/UpdateCampaign";
import Details from "../Pages/Details";
import MyDonation from "../Pages/MyDonation";
import Error from "../Pages/Error";

const url = 'https://crowd-cube-server-six.vercel.app/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${url}getRunningCampaign`),
      },
      {
        path: "allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch(`${url}getAllCampaigns`),
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
        path: "myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: () => fetch(`${url}getMyCampaign/${ls.getEmail()}`),
      },
      {
        path: "updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${url}getCampaign/${params.id}`),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${url}getCampaign/${params.id}`),
      },
      {
        path: "myDonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
        loader: () => fetch(`${url}getDonation/${ls.getEmail()}`),
      },
    ],
  },
]);

export default router;
