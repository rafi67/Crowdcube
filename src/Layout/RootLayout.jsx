import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Pages/Loading";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  let path = "";

  path +=
    pathname === "/"
      ? "Home"
      : pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <div className="min-h-screen flex flex-col font-poppins space-y-4">
      <Helmet>
        <title>{path}</title>
      </Helmet>
      <header>
        <Header></Header>
      </header>
      <ToastContainer position="top-center" />
      <main className="mx-auto w-screen">
        {loading ? <Loading></Loading> : <Outlet />}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
