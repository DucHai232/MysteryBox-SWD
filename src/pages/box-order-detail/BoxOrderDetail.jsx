import React, { useEffect, useState } from "react";
import "./BoxOrderDetail.css";
import Header from "../../components/header/Header";
import { useLocation, useParams } from "react-router-dom";
import { getPackageInPeriodByPackageOrderId } from "../../apis/packageInPeriod.request";
import { getBox } from "../../apis/box.request";
const BoxOrderDetail = () => {
  const { id } = useParams();
  const [boxData, setBoxData] = useState([]);
  const [periodBox, setPeriodBox] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPackageInPeriodByPackageOrderId(id);
        const boxs = await getBox();
        setBoxData(
          boxs.data.mysteryBoxs.filter(
            (box) => box.id === response.data.packageInPeriod[0].boxId
          )
        );
        setPeriodBox(response.data.packageInPeriod[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(periodBox?.endBy);
  return (
    <>
      <Header />
      <div className="boxOrderDetail-container">
        <h1>Các hộp quà bí ẩn</h1>
        <div className="boxs-container">
          {boxData.map((box) => (
            <div className="box">
              <img src={box.image} className="image" />
              <div className="description">
                <ul>
                  <li>{box.name}</li>
                  <li>{box.description}</li>
                  <li>
                    <img src={box.qrCode} className="qrcode" />{" "}
                  </li>
                </ul>
              </div>
              {periodBox?.endBy ? (
                <div className="transport-box">
                  <ul>
                    <li>
                      <b>Ngày mở: </b>{" "}
                      <span className="success">22-05-2024</span>
                    </li>
                    <li>
                      <b>Đóng gói: </b>{" "}
                      <span className="success">22-05-2024 12:00</span>
                    </li>
                    <li>
                      <b>Giao hàng: </b>{" "}
                      <span className="pending">Đang thực hiện...</span>
                    </li>
                    <li>
                      <b>Xác nhận giao hàng: </b>{" "}
                      <span className="pending">Đang thực hiện...</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="openbox">
                  {box.status ? "Chưa mở quà" : "Phần quà của bạn"}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="choose-box">
          {periodBox?.endBy && (
            <button className="btn-choose-box">Chọn hộp quà tiếp theo</button>
          )}
        </div>
      </div>
    </>
  );
};

export default BoxOrderDetail;
