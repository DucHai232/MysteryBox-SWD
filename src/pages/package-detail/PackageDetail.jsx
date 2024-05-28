import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./PackageDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";
import { useNavigate, useParams } from "react-router-dom";
import ListPackage from "../../data/ListPackage.json";
import { CiCircleCheck } from "react-icons/ci";
import { message } from "antd";
const PackageDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPackage());
  }, []);
  const packages = useSelector((state) => state.packageReducer.packages);
  const data = packages?.packages?.filter((item) => item.id === id)[0];
  const user = JSON.parse(localStorage.getItem("user"));
  const handleAddToCart = () => {
    if (!user || (Array.isArray(user) && user.length === 0)) {
      message.warning("Vui lòng đăng nhập rồi tiến hành đăng ký");
    } else {
      navigate(`/package-register/${data?.id}`);
    }
  };
  return (
    <>
      <Header />
      <div className="package-detail-container">
        <h1 className="title">{data?.name}</h1>
        <div className="description">
          <ul className="list-info">
            <li>
              Thời gian nhận quà
              <ul>
                <li>Mỗi tháng nhận 1 phần quà</li>
                <li>Nếu đăng ký từ ngày 1-15 thì sẽ nhận cuối tháng</li>
                <li>Nếu đăng ký từ ngày 15 - 30 thì sẽ nhận đầu tháng</li>
              </ul>
            </li>
            <li>Tổng chi phí: {data?.price}</li>
            <li>Chi phí mỗi box: {data?.price}</li>
          </ul>
          <img src={data?.image} className="image" />
        </div>
        <table>
          <tr>
            <td></td>
            <td>Standard</td>
            <td>Essential</td>
            <td>Elite</td>
            <td>Prestige</td>
            <td>Ultimate</td>
          </tr>
          {ListPackage.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.standard && <CiCircleCheck className="icon-check" />}</td>
              <td>
                {el.essential && <CiCircleCheck className="icon-check" />}
              </td>
              <td>{el.elite && <CiCircleCheck className="icon-check" />}</td>
              <td>{el.prestige && <CiCircleCheck className="icon-check" />}</td>
              <td>{el.ultimate && <CiCircleCheck className="icon-check" />}</td>
            </tr>
          ))}
        </table>
        <button className="btn" onClick={handleAddToCart}>
          Đăng ký ngay
        </button>
      </div>
    </>
  );
};

export default PackageDetail;
