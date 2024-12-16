import { useState } from "react";

const UpdateFormModal = ({ id, user }) => {

  const handleUpdate = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const type = e.target.type.value;
    const title = e.target.title.value;
    const amount = e.target.amount.value;
    const deadLine = e.target.deadLine.value;
    const _id = e.target.id.value;

    const updateData = {
      name,
      email,
      title,
      type,
      amount,
      deadLine,
      photo,
      _id,
      description,
    };

    fetch('http://localhost:5000/updateCampaign', {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json',
      },
      body: updateData,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
    
    document.getElementById("close").click();
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2 className="text-2xl font-semibold text-center">
            Update Campaign
          </h2>
          <form method="dialog" className="card-body" onSubmit={handleUpdate}>
            <input type="text" name="id" value={user._id} hidden />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo-URL"
                name="photo"
                defaultValue={user.photo}
                className="input input-bordered"
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
                defaultValue={user.title}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Type</span>
              </label>
              <select
                className="input input-bordered"
                type="text"
                name="type"
                value={user.type}
              >
                <option disabled>Type</option>
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
                type="text"
                defaultValue={user.description}
                className="textarea textarea-bordered textarea-lg w-full"
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
                defaultValue={user.amount}
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
                defaultValue={user.deadLine}
                className="input input-bordered"
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
                className="input input-bordered"
                defaultValue={user.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                defaultValue={user.name}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-6"></div>
            <button className="btn">
              Update
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" id="close">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateFormModal;
