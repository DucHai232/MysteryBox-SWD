import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="title">Myseter Box</h1>
        <ul className="social-media">
          <li>
            <FaFacebook className="icon facebook" />
          </li>
          <li>
            <FaInstagram className="icon instagram" />
          </li>
          <li>
            <SiZalo className="icon zalo" />
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <div className="list-info">
          <ul>
            <li className="title">Topic</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
          </ul>
        </div>
        <div className="list-info">
          <ul>
            <li className="title">Topic</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
          </ul>
        </div>
        <div className="list-info">
          <ul>
            <li className="title">Topic</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          className="image"
        />
      </div>
    </div>
  );
};

export default Footer;
