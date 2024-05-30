import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, message } from "antd";
const ChooseBox = ({ setBoxId }) => {
  const dataBoxs = useSelector((state) => state.boxReducer?.boxs.mysteryBoxs);
  const handleChooseBox = (id, name) => {
    setBoxId(id);
    message.success(`Bạn đã chọn ${name}`);
  };
  return (
    <>
      <div className="box-conatiner">
        <Row>
          {dataBoxs?.map((box) => (
            <Col span={8}>
              <div className="theme">
                <img src={box.image} className="image" />
                <p className="title">{box.name}</p>
                <p className="des">{box.description}</p>
                <button
                  className="btn"
                  onClick={() => handleChooseBox(box.id, box.name)}
                >
                  Chọn
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ChooseBox;
