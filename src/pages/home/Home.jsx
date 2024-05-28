import React, { useEffect } from "react";
import "./Home.css";
import Background from "../../components/home/Background";
import ListBox from "../../components/home/ListBox";
import Header from "../../components/header/Header";
import Package from "../../components/home/Package";
import { useDispatch, useSelector } from "react-redux";
import { getDataPackage } from "../../redux/actions/package.action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPackage());
  }, []);
  const data = useSelector((state) => state.packageReducer.packages);
  const themeLightDark = useSelector((state) => state.lightdarkReducer);
  return (
    <>
      <Header />
      <div className="home-container">
        <Background />
        <Package data={data} />
      </div>
    </>
  );
};

export default Home;
