import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const MyCampaign = () => {
  const loadedData = useLoaderData();

  const [campaign, setCampaign] = useState([...loadedData]);

  const deleteCampaign = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you Sure",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Campaign has been deleted.",
          icon: "success",
        });
        fetch(`https://crowd-cube-server-six.vercel.app/deleteCampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCampaign = campaign.filter((u) => u._id !== id);
              setCampaign([...remainingCampaign]);
            }
          })
          .catch((err) => toast.error(err));
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Campaign Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Campaign Title</th>
            <th>Campaign Type</th>
            <th>Minimum Donation Amount</th>
            <th>Deadline</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {campaign.map((data) => (
            <>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={data.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.title}</td>
                <td>{data.type}</td>
                <td>{data.amount}</td>
                <td>{data.deadLine}</td>
                <td>{data.description}</td>
                <td>
                  <Link className="btn" to={`/updateCampaign/${data._id}`}>
                    <MdEdit />
                  </Link>
                </td>
                <td>
                  <button className="btn" onClick={() => deleteCampaign(data._id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
