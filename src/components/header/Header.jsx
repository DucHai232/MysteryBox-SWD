import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import { logout } from "../../redux/actions/auth.action";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.auth.user);
  const [info, setInfo] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    setInfo(false);
  };
  return (
    <div className="header-container">
      <div className="title" onClick={() => navigate("/")}>
        MysisterGift
      </div>
      <div className="header-nav">
        <ul className="list-nav">
          <li>About Us</li>
          <li>Home</li>
          <li>Support</li>
          {!user ? (
            <li className="btn" onClick={() => navigate("/register")}>
              Login/Register
            </li>
          ) : (
            <div>
              {" "}
              <Avatar
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_4MUpPLVjqA2xWyq3u0YosxO4LpcPigtuqQmYt26pQ&s"
                }
                onClick={() => setInfo((prev) => !prev)}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {info && (
            <div className="info">
              <ul>
                <li>Thông tin cá nhân</li>
                <li>Tài khoản của con</li>
                <li onClick={handleLogout}>Đăng xuất</li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
