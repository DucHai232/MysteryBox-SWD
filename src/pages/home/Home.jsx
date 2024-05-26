import React from "react";
import "./Home.css";
import Background from "../../components/home/Background";
import ListBox from "../../components/home/ListBox";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <Background />
        <ListBox />
      </div>
    </>
  );
};

export default Home;
