import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./PackageDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import ListBox from "../../components/home/ListBox";
const PackageDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPackage());
  }, []);
  const packages = useSelector((state) => state.packageReducer.packages);
  const data = packages?.packages?.filter((item) => item.id === id)[0];
  const user = useSelector((state) => state.authReducer.auth);
  console.log(user);
  const handleAddToCart = () => {
    if (!user || (Array.isArray(user) && user.length === 0)) {
      alert("Vui lòng đăng nhập rồi mua hàng");
    } else {
      alert("Xử lý tiếp theo");
    }
  };
  return (
    <>
      <Header />
      <div className="package-detail-container">
        <img src={data?.image} className="image" />
        <div className="des">
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
          <p>{data?.price}vnd</p>
          <p>Body text for describing why this product is simply a must-buy</p>
          <button className="btn" onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className="info-box">
            <p>Gói hàng trong {data?.name} bao gồm</p>
            <ul>
              <li>Một mô hình, quần áo, đồ chơi nhựa, bộ dụng cụ tự chọn</li>
              <li>Một phiếu cảm ơn từ shop gửi đến khách hàng</li>
              <li>Một mã QR bao gồm thông tin của sản phẩm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="related-box">
        <ListBox />
      </div>
    </>
  );
};

export default PackageDetail;
