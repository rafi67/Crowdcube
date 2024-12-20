import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaigns = () => {
  const data = useLoaderData();
  const [campaign, setCampaign] = useState(data);

  const handleSort = () => {
    setCampaign([...campaign].sort((a, b) => a.amount - b.amount));
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
            <th>Details</th>
            <th>
              <button className="btn btn-neutral" onClick={handleSort}>
                Sort
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {campaign.map((data) => (
            <>
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
                  <Link className="btn" to={`/details/${data._id}`}>
                    See More
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaigns;
