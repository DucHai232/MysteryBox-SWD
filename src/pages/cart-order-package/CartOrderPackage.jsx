import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPackageOrderByUserId } from "../../redux/actions/packageOrder.action";

const CartOrderPackage = () => {
  const columns = [
    {
      title: "Tên của bạn",
      dataIndex: "nameOfAdult",
      key: "nameOfAdult",
      render: (text) => <a>{text}</a>,
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
      title: "Đơn hàng vận chuyển",
      key: "transport",
      dataIndex: "transport",
      render: (_, { record }) => <>{<Tag color="blue">Xem chi tiết</Tag>}</>,
    },
  ];
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
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
