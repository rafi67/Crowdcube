import { React, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 bg-transparent">
      <div className="navbar-start">
        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller"
        />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campaigns">All Campaigns</Link>
            </li>
            <li>
              <Link to="/help">How to Help</Link>
            </li>
            {user && (
                <li>
                  <Link to="/addCampaign">Add Campaign</Link>
                </li>
              ) && (
                <li>
                  <Link to="/myCampaign">My Campaign</Link>
                </li>
              ) && (
                <li>
                  <Link to="/myDonation">My Donation</Link>
                </li>
              )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl hidden md:flex" to="/">
          {/* <img src={logo} alt="" className="w-12" /> */}
          Home
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campaigns">All Campaigns</NavLink>
          </li>
          {user && (
              <li>
                <NavLink to="/addCampaign">Add Campaign</NavLink>
              </li>
            ) && (
              <li>
                <NavLink to="/myCampaign">My Campaign</NavLink>
              </li>
            ) && (
              <li>
                <NavLink to="/myDonation">My Donation</NavLink>
              </li>
            )}
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        {user && user?.email ? (
          <div className="hidden md:flex items-center space-x-2">
            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            <p>{user.displayName}</p>
          </div>
        ) : (
          <img src={userIcon} alt="" />
        )}
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral">
            Log-Out
          </button>
        ) : (
          <>
            <Link to="login" className="btn btn-neutral">
              Login
            </Link>
            <Link to="register" className="btn btn-neutral">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
