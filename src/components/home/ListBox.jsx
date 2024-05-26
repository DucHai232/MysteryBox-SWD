import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";
import { useNavigate } from "react-router-dom";
const ListBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPackage());
  }, []);
  const data = useSelector((state) => state.packageReducer.packages);
  return (
    <div className="listbox-container">
      <h1 className="title">Recomend for you</h1>
      <Row>
        {data?.packages?.map((item) => (
          <Col span={8} onClick={() => navigate(`/package/${item.id}`)}>
            <div className="card">
              <img src={item.image} className="image" />
              <div className="content">
                <h3 className="title">{item.name}</h3>
                <p className="des">{item.description}</p>
                <p className="price">{item.price} vnd</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListBox;
