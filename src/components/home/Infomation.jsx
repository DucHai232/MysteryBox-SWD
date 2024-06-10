import React from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaRingSolid } from "react-icons/lia";
import { FaGift } from "react-icons/fa";
import { TfiGift } from "react-icons/tfi";
import { Col, Row } from "antd";
const listData = [
  {
    id: 1,
    icon: <LiaBirthdayCakeSolid />,
    title: "Birthday Gifts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 2,
    icon: <LiaRingSolid />,
    title: "Anniversary Gifts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Special Gifts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 4,
    icon: <TfiGift />,
    title: "Love Gifts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];
const Infomation = () => {
  return (
    <div className="infomation-container">
      <div className="title">
        <h1>We Don’t Just Send Gifts.</h1>
        <h1>We Deliver Happiness.</h1>
        <p className="des">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. industry’s standard dummy text ever since the 1500s,
        </p>
      </div>
      <Row>
        {listData.map((item) => (
          <Col span={6}>
            <div className="card">
              <span className="icon">{item.icon}</span>
              <p className="title">{item.title}</p>
              <p className="des">{item.des}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Infomation;
