import React, { useEffect } from "react";
import "./Home.css";
import Background from "../../components/home/Background";
import ListBox from "../../components/home/ListBox";
import Header from "../../components/header/Header";
import Package from "../../components/home/Package";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";
import OtherBox from "../../components/home/OtherBox";
import Infomation from "../../components/home/Infomation";
import { useParams } from "react-router-dom";
import { loginOAuthGoogle } from "../../redux/actions/oauth.action";

const Home = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPackage());
  }, []);
  useEffect(() => {
    dispatch(loginOAuthGoogle(userId));
  }, []);
  const data = useSelector((state) => state.packageReducer.packages);
  return (
    <>
      <Header />
      <div className="home-container">
        <Background />
        <OtherBox />
        <ListBox data={data} />
        <Infomation />
        {/* <Package data={data} /> */}
      </div>
    </>
  );
};

export default Home;
