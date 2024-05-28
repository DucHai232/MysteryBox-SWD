import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useSelector } from "react-redux";
import PackageDetail from "./pages/package-detail/PackageDetail";
import RegisterPackage from "./pages/register-package/RegisterPackage";
import CreateKidProfile from "./pages/create-kid-profile/CreateKidProfile";
import PaymentOrder from "./pages/payment-order/PaymentOrder";
import Footer from "./components/footer/Footer";
import InfoProfileKid from "./pages/info-profile-kid/InfoProfileKid";
import CartOrderPackage from "./pages/cart-order-package/CartOrderPackage";
function App() {
  const user = useSelector((state) => state.authReducer.auth);
  const themeLightDark = useSelector((state) => state.lightdarkReducer);
  return (
    <div
    // style={
    //   themeLightDark.isLightTheme ? themeLightDark.light : themeLightDark.dark
    // }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/package-register/:id" element={<RegisterPackage />} />
        <Route path="/create-kid-profile" element={<CreateKidProfile />} />
        <Route path="/payment-order/:id" element={<PaymentOrder />} />
        <Route path="/info-profile-kid" element={<InfoProfileKid />} />
        <Route path="/cart-order-package" element={<CartOrderPackage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
