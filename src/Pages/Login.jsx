import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { userLogin, userLoginWithGoogle, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const signInWithGoogle = (e) => {
    e.preventDefault();
    userLoginWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-9">
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={inputType}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <button
            className="btn w-[20%] text-gray-400 hover:bg-transparent bg-transparent border-none absolute top-9 right-4"
            onClick={(e) => {
              e.preventDefault();
              inputType === "password"
                ? setInputType("text")
                : setInputType("password");
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          <label className="label">
            <Link
              to="/resetPassword"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6 space-y-4">
          <button className="btn btn-neutral">Login</button>
          <hr className="border-gray-500" />
          <button
            onClick={signInWithGoogle}
            className="btn border-spacing-2 border-neutral"
          >
            <FcGoogle className="text-3xl" />
            Login with Google
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Don’t Have An Account ?{" "}
        <Link className="text-red-500" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
