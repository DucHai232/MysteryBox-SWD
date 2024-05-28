import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./RegisterPackage.css";
import { Button, message, Steps, theme } from "antd";
import ChooseKidInfo from "../../components/register-package/ChooseKidInfo";
import Theme from "../../components/register-package/Theme";
import Confirm from "../../components/register-package/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderPackage } from "../../redux/actions/packageOrder.action";
import store from "../../store/ReduxStore";
import ChooseBox from "../../components/register-package/ChooseBox";
const steps = [
  {
    title: "Chọn theme",
    comp: "theme",
  },
  {
    title: "Đăng ký tài khoản của con",
    comp: "register",
  },
  {
    title: "Chọn box quà",
    comp: "box",
  },
  {
    title: "Xác nhận thông tin",
    comp: "confirm",
  },
];

const RegisterPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [themeId, setThemeId] = useState("");
  const [kidId, setKidId] = useState("");
  const [boxId, setBoxId] = useState("");
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const handleNextKidId = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const kidProfiles = useSelector((state) => state.kidReducer.dataKids);
  const kidProfile = kidProfiles?.filter((kid) => kid.id === kidId)[0];
  const dataPackages = useSelector((state) => state.packageReducer.packages);
  const packageChooseByUser = dataPackages?.packages?.filter(
    (item) => item.id === id
  )[0];
  const handleOrder = () => {
    const confirmUserOrder = {
      kidId: kidId,
      totalPrice: packageChooseByUser?.price,
      nameOfAdult: user?.user?.fullName,
      nameOfKid: kidProfile?.fullName,
      phone: user?.user?.phone,
      email: user?.user?.email,
      additionalNotes: "This is a sample additional note.",
    };
    dispatch(orderPackage(id, confirmUserOrder));
    const error = store.getState().packageOrderReducer.error;
    if (error) {
      return message.error(error);
    }
    message.success("Thành công");
    navigate(`/payment-order/${id}`);
  };
  return (
    <>
      <Header />
      <div className="register-package-container">
        <Steps current={current} items={items} />
        <div style={contentStyle}>
          {current === 0 && <Theme setThemeId={setThemeId} />}
          {current === 1 && <ChooseKidInfo setKidId={setKidId} kidId={kidId} />}
          {current === 2 && <ChooseBox setBoxId={setBoxId} />}
          {current === 3 && (
            <Confirm
              kidId={kidId}
              user={user?.user}
              kidProfile={kidProfile}
              packageChooseByUser={packageChooseByUser}
            />
          )}
        </div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current === 0 && themeId && (
            <Button type="primary" onClick={() => next()}>
              Tiếp theo
            </Button>
          )}
          {current === 1 && kidId && (
            <Button type="primary" onClick={() => handleNextKidId()}>
              Tiếp theo
            </Button>
          )}
          {current === 2 && boxId && (
            <Button type="primary" onClick={() => handleNextKidId()}>
              Tiếp theo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleOrder}>
              Xác nhận
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Trở lại
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPackage;
