import { useLoaderData } from "react-router-dom";
import AllCampaignTable from "../Components/AllCampaignTable";

const AllCampaigns = () => {
  const campaign = useLoaderData();

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
              </tr>
            </thead>
            <tbody>
              {campaign.map(data => (
                <AllCampaignTable key={data._id} user={data}></AllCampaignTable>
              ))}
            </tbody>
          </table>
        </div>
  );
};

export default AllCampaigns;
