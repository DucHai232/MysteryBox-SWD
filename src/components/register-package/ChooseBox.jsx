import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../../redux/actions/box.action";
import { Col, Row, message } from "antd";
import { getCurrentPeriod } from "../../apis/period.request";
const ChooseBox = ({ setBoxId }) => {
  const [currentPeriod, setCurrentPeriod] = useState();
  const [dataPackageInPeriod, setDataPackageInPeriod] = useState({
    periodId: "",
    boxId: "",
    packageOrderId: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBox());
    const fetchData = async () => {
      const response = await getCurrentPeriod();
      setCurrentPeriod(response?.data.periodCurrent);
    };
    fetchData();
  }, []);

  const dataBoxs = useSelector((state) => state.boxReducer?.boxs.mysteryBoxs);
  const handleChooseBox = (id, name) => {
    setBoxId(id);
    message.success(`Bạn đã chọn ${name}`);
    const newPackageInPeriod = {
      periodId: currentPeriod?.id,
      boxId: "",
      packageOrderId: "",
    };
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
