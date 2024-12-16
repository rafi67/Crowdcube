import React from "react";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
  const data = useLoaderData();

  console.log('loaded data', data);

  const handleSubmit = (e) => {

    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const type = e.target.type.value;
    const title = e.target.title.value;
    const amount = e.target.amount.value;
    const deadLine = e.target.deadLine.value;

    const campaign = {
      photo,
      title,
      type,
      description,
      email,
      name,
      amount,
      deadLine,
    };

    fetch(`http://localhost:5000/updateCampaign/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Campaign Successfully Added");
      })
      .catch((err) => toast.error(err.message));
    e.target.reset();
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto py-4">
      <h2 className="text-2xl font-semibold text-center">Update Campaign</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo-URL"
            name="photo"
            className="input input-bordered"
            defaultValue={data.photo}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Title</span>
          </label>
          <input
            type="text"
            placeholder="Campaign Title"
            name="title"
            defaultValue={data.title}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Type</span>
          </label>
          <select
            className="select select-bordered join-item"
            type="text"
            name="type"
            defaultValue={data.type}
          >
            <option disabled value={"Type"}>
              Type
            </option>
            <option value={"Personal Issue"}>Personal Issue</option>
            <option value={"Startup"}>Startup</option>
            <option value={"Business"}>Business</option>
            <option value={"Creative Ideas"}>Creative Ideas</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            name="description"
            defaultValue={data.description}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Minimum Donation Amount</span>
          </label>
          <input
            type="text"
            placeholder="Minimum Donation Amount"
            name="amount"
            defaultValue={data.amount}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            placeholder="Deadline"
            name="deadLine"
            defaultValue={data.deadLine}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={data.email}
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="email"
            name="name"
            placeholder="User Name"
            value={data.name}
            className="input input-bordered w-full max-w-xs"
            readOnly
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
