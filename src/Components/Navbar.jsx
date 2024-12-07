import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/user.png";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 bg-transparent">
      <div className="navbar-start">
      <input type="checkbox" value="light" className="toggle theme-controller" />
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
              <Link to="/donation">Donation Campaigns</Link>
            </li>
            <li>
              <Link to="/help">How to Help</Link>
            </li>
            {/* {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )} */}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl hidden md:flex" to="/">
        <img src={logo} alt="" className="w-12" />
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
          <li>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/addCampaign">My Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/addCampaign">My Donation</NavLink>
          </li>
          {/* {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )} */}
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        {/* {user && user?.email ? (
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
          <Link to="login" className="btn btn-neutral">
            Login
          </Link>
        )} */}
      </div>
    </div>
    );
};

export default Navbar;