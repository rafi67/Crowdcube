import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and container at least one upper case and one lower case case character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-4">
      <h2 className="text-2xl font-semibold text-center">Register</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo-URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have An Account ?{" "}
        <Link className="text-red-500" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
