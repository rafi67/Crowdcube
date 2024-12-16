import PropTypes from "prop-types";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import UpdateFormModal from "./UpdateFormModal";

const CampaignTable = ({ user, deleteCampaign }) => {
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
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <MdEdit />
          </button>
        </td>
        <td>
          <button className="btn" onClick={() => deleteCampaign(_id)}>
            <MdDelete />
          </button>
        </td>
      </tr>
      <UpdateFormModal id={_id} user={user}></UpdateFormModal>
    </>
  );
};

CampaignTable.propTypes = {
  user: PropTypes.object,
  deleteCampaign: PropTypes.func,
};

export default CampaignTable;
