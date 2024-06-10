import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPackageOrderByUserId } from "../../redux/actions/packageOrder.action";
import { useNavigate } from "react-router-dom";

const CartOrderPackage = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Tên của bạn",
      dataIndex: "nameOfAdult",
      key: "nameOfAdult",
    },
    {
      title: "Tên của con",
      dataIndex: "nameOfKid",
      key: "nameOfKid",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tổng giá tiền",
      key: "totalPrice",
      dataIndex: "totalPrice",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {
            <Tag
              color={
                status === "Pending"
                  ? "orange"
                  : status === "Finished"
                  ? "green"
                  : "red"
              }
            >
              {status === "Pending"
                ? "Đang diễn ra"
                : status === "Finished"
                ? "Hoàn thành"
                : "Hủy"}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "Đơn hàng vận chuyển",
      key: "id",
      render: (_, { id }) => (
        <>
          {
            <Space size="middle">
              <a
                onClick={() => {
                  navigate(`/box-order-detail/${id}`);
                }}
              >
                Xem chi tiết
              </a>
            </Space>
          }
        </>
      ),
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackageOrderByUserId());
  }, []);
  const packageOrders = useSelector(
    (state) => state.packageOrderReducer.packageOrders.packageOrders
  );
  return (
    <>
      <Header />
      <div style={{ padding: "0 var(--padding-container)" }}>
        <h1 className="title">Giỏ hàng của bạn</h1>
        <Table columns={columns} dataSource={packageOrders} />
      </div>
    </>
  );
};

export default CartOrderPackage;
