import React from "react";
import "./MessageSuccessOrder.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
const MessageSuccessOrder = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <>
      <Header />
      <div>Thanh toán</div>
      {data.success ? (
        <div class="success-message">
          <h2>Đặt hàng thành công!</h2>
          <p>
            Cảm ơn bạn đã mua hàng của chúng tôi. Chúng tôi sẽ xử lý đơn hàng
            của bạn càng sớm càng tốt.
          </p>
        </div>
      ) : (
        <div>Fail</div>
      )}
    </>
  );
};

export default MessageSuccessOrder;
