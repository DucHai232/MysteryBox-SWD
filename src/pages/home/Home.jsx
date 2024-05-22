import React from "react";
import "./Home.css";
import Background from "../../components/home/Background";
import ProposeBox from "../../components/home/ProposeBox";
import Filter from "../../components/home/Filter";
import News from "../../components/home/News";
const Home = () => {
  return (
    <div className="home-container">
      <Background />
      <ProposeBox />
      <Filter />
      <News />
    </div>
  );
};

export default Home;
