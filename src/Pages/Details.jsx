import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const donatedAmount = parseInt(e.target.amount.value);
    const donatedId = data._id;
    const name = user.displayName;
    const email = user.email;
    const today = new Date();
    const date = data.deadLine;
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log(today, date);

    if (date < formattedDate) {
      toast.error("Sorry Deadline is over.");
      return;
    }

    if (donatedAmount >= data.amount) {
      const donation = {
        donatedId,
        name,
        email,
        donatedAmount,
      };

      fetch(`http://localhost:5000/addDonation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(donation),
      })
        .then((res) => res.json())
        .then(() => {
          e.target.reset();
          toast.success("Donation Successful");
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.warning(
        "Your donation amount doesn't meet the minimum requirements"
      );
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-normal xl:justify-center mx-auto space-y-6 xl:space-y-0 xl:space-x-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[311px]" src={data.photo} alt={data.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="text-gray-400 font-bold">{data.type}</p>
          <p className="text-gray-400 font-bold">{data.amount}</p>
          <input
            type="date"
            placeholder="Deadline"
            name="deadLine"
            value={data.deadLine}
            className="input input-bordered w-full max-w-xs"
          />
          <p className="text-gray-400 font-bold">{data.description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center">
        <h1 className="text-3xl font-bold">Donate</h1>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Amount to Donate</span>
            </label>
            <input
              type="text"
              placeholder="Amount"
              className="input input-bordered"
              name="amount"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Donate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
