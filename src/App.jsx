import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useSelector } from "react-redux";
import PackageDetail from "./pages/package-detail/PackageDetail";
function App() {
  const user = useSelector((state) => state.authReducer.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package/:id" element={<PackageDetail />} />
      </Routes>
    </>
  );
}

export default App;
