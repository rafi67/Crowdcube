import { useLoaderData, useLocation } from "react-router-dom";
import ls from "../localStorage/localStorage";
import { useEffect, useState } from "react";

const AllCampaigns = () => {
  const campaign = useLoaderData();

  return (
    <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {campaign.map((campaign) => (
        <div key={campaign._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[311px]"
              src={campaign.photo}
              alt={campaign.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{campaign.title}</h2>
            <p>Type: {campaign.type}</p>
            <p>Minimum Amount to Donate: {campaign.amount}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">See more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCampaigns;
