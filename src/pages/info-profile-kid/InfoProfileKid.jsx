import React, { useEffect } from "react";
import "./InfoProfileKid.css";
import Header from "../../components/header/Header";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { banProfileKid, getKidProfile } from "../../redux/actions/kid.action";

const InfoProfileKid = () => {
  const dispatch = useDispatch();
  const handleBanProfile = (id, status) => {
    dispatch(banProfileKid(id, status));
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ngày sinh",
      dataIndex: "yob",
      key: "yob",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Sở thich",
      key: "descriptionHobby",
      dataIndex: "descriptionHobby",
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Chất liệu",
      dataIndex: "material",
      key: "material",
    },
    {
      title: "Thể loại đồ chơi",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {
            <Tag color={status ? "green" : "red"} key={status}>
              {status ? "Hoạt động" : "Ban"}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "Ban thông tin",
      key: "status",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() =>
              handleBanProfile(record.id, record.status ? "0" : "1")
            }
          >
            {record.status ? "Ban" : "Mở ban"}
          </a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getKidProfile());
  }, []);
  const kidProfile = useSelector((state) => state.kidReducer.dataKids);
  return (
    <>
      <Header />
      <div className="info-profile-kid-container">
        <h1 className="title">Thông tin của con</h1>
        <Table columns={columns} dataSource={kidProfile} />
      </div>
    </>
  );
};

export default InfoProfileKid;
