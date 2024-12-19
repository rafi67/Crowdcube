import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import CampaignTable from "../Components/CampaignTable";

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
        fetch(`http://localhost:5000/deleteCampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCampaign = user.filter((u) => u._id !== id);
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
          {campaign.map(data => (
            <CampaignTable key={data._id} user={data} deleteCampaign={deleteCampaign}></CampaignTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
