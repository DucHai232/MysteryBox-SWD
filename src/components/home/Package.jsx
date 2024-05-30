import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
const Package = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        {data?.packages?.map((item) => (
          <Col span={8} key={item.id}>
            <div className="package">
              <div className="type">
                <p className="title">Standard</p>
                <p className="price">{item.price}</p>
              </div>
              <div className="description">
                <span className="name">{item.name}</span>
                <ul>
                  <li>
                    <FaCheck className="icon" /> <span>1 Box quà</span>
                  </li>
                  <li>
                    <FaCheck className="icon" /> <span>1 phiếu cảm ơn</span>
                  </li>
                  <li>
                    <FaCheck className="icon" /> <span>1 QR</span>
                  </li>
                </ul>
              </div>
              <button
                className="button"
                onClick={() => navigate(`/package/${item.id}`)}
              >
                Xem ngay
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Package;
