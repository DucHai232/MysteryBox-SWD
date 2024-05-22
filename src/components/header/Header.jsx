import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <p className="title">Mystery Box</p>
        <ul>
          <li>Đề xuất</li>
          <li>MY STAND-IN</li>
          <li>Khác</li>
        </ul>
      </div>
      <div className="header-search">
        <div className="input-search">
          <input type="text" className="input" />
          <SearchIcon className="icon-search" />
        </div>
        <ul>
          <li>
            <AccessTimeIcon className="icon" />
            <p className="text">Lịch sử xem</p>
          </li>
          <li>
            <PersonIcon className="icon" />
            <p className="text">Của tôi</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
