import React from "react";
import { FaGift } from "react-icons/fa6";
const Background = () => {
  return (
    <div className="banner">
      <div className="card-banner">
        <h3 className="text">The Best Gift Shop</h3>
        <h1 className="title">Creating Happiness For Your Loved Ones</h1>
        <p className="des">
          Browse through some of the largest collection of gifts to brighten
          your day
        </p>
        <button className="btn">CHOOSE A GIFT</button>
      </div>
      <div className="menu">
        <div className="left">
          <FaGift className="icon" />
          <p className="text">Let's find the perfect gift! </p>
        </div>
        <div className="right">
          <button className="btn">FIND A GIFT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Background;
