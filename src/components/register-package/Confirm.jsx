import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Confirm = ({ kidId, user, kidProfile, packageChooseByUser }) => {
  return (
    <div className="confirm-container">
      <ul className="list-confirm">
        <li>
          <span className="title">Tên của con: </span> {kidProfile.fullName}
        </li>
        <li>
          <span className="title">Tên của phụ huynh: </span> {user?.fullName}
        </li>
        <li>
          <span className="title">Số điện thoại: </span> {user?.phone}
        </li>
        <li>
          <span className="title">Email: </span> {user?.email}
        </li>
        <li>
          <span className="title">Gói package: </span>{" "}
          {packageChooseByUser?.name}
        </li>
        <li>
          <span className="title">Tổng giá tiền: </span>{" "}
          {packageChooseByUser?.price}
        </li>
      </ul>
    </div>
  );
};

export default Confirm;
