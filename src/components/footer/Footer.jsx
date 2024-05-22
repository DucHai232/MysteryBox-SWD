import React from "react";
import "./Footer.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ListIntroductCompany from "../../data/ListIntroductCompany.json";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company">
        <img
          src="https://bizweb.dktcdn.net/100/515/274/themes/948567/assets/logo.png?1716302199070"
          className="image"
        />
        <div className="info-company">
          <ul>
            <li>
              <FmdGoodIcon />
              <span>
                72/8A Cô Giang, Phường 02, Quận Phú Nhuận, Hồ Chí Minh
              </span>
            </li>
            <li>
              <LocalPhoneIcon />
              <span>0378909789</span>
            </li>
            <li>
              <EmailIcon />
              <span>vnblindbox@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="introduct-company">
        {ListIntroductCompany.map((el) => (
          <div className="list">
            <p className="title">{el.title}</p>
            {el.list.map((item) => (
              <ul>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
