import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";
import { useNavigate } from "react-router-dom";
const ListBox = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="listbox-container">
      <h1 className="title">Package Gift</h1>
      <Row>
        {data?.packages?.map((item) => (
          <Col span={6} onClick={() => navigate(`/package/${item.id}`)}>
            <div className="card">
              <img src={item.image} className="image" />
              <div className="content">
                <h3 className="title">{item.name}</h3>
                <p className="price">{item.price} vnd</p>
              </div>
              <button className="btn">Xem ngay</button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListBox;
