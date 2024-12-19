import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const AllCampaignTable = ({ user }) => {
  const {
    name,
    email,
    title,
    type,
    amount,
    deadLine,
    photo,
    _id,
    description,
  } = user;

  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{title}</td>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{deadLine}</td>
        <td>{description}</td>
        <td>
          <Link className="btn" to={`/details/${_id}`}>
            See More
          </Link>
        </td>
      </tr>
    </>
  );
};

AllCampaignTable.propTypes = {
    user: PropTypes.object,
};

export default AllCampaignTable;
