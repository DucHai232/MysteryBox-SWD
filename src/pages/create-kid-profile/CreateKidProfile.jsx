import React, { useState } from "react";
import { DatePicker, Input, Modal, Select, Space } from "antd";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";
import { createInfoProfileKid } from "../../apis/kid.request";
const CreateKidProfile = ({ modalOpen, setModalOpen }) => {
  const [data, setData] = useState({
    fullName: "",
    descriptionHobby: "",
    yob: "",
    gender: "",
    color: "",
    type: "",
    material: "",
    toyOrigin: "",
  });
  const handleChange = (name, value) => {
    setData((prevData) => {
      let newValue = value;
      if (name === "yob" && value?.$d) {
        const date = new Date(value.$d);
        newValue = formatDate(date);
      }
      return { ...prevData, [name]: newValue };
    });
  };
  const options = [
    {
      label: "Vẽ",
      value: "Painting",
    },
    {
      label: "Chế tạo",
      value: "Crafting",
    },
    {
      label: "Đá bóng",
      value: "Soccer",
    },
    {
      label: "Đọc sách",
      value: "Read book",
    },
    {
      label: "Nghe nhạc",
      value: "Music",
    },
  ];
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleCreate = () => {
    setModalOpen(false);
    createInfoProfileKid(data);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <>
      <Modal
        title="Tạo thông tin cho con"
        style={{
          top: 20,
        }}
        open={modalOpen}
        onOk={handleCreate}
        onCancel={() => setModalOpen(false)}
      >
        <Input
          placeholder="Họ và tên"
          name="fullName"
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
        <div className="select-form">
          <DatePicker
            className="select"
            onChange={(value) => handleChange("yob", value)}
          />
          <Select
            className="select"
            showSearch
            placeholder="Giới tính"
            optionFilterProp="children"
            onChange={(value) => handleChange("gender", value)}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "FEMALE",
                label: "Nữ",
              },
              {
                value: "MALE",
                label: "Nam",
              },
              {
                value: "OTHER",
                label: "Khác",
              },
            ]}
          />
          <Select
            className="select"
            showSearch
            placeholder="Màu sắc"
            optionFilterProp="children"
            onChange={(value) => handleChange("color", value)}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Blue",
                label: "Xanh đậm",
              },
              {
                value: "Green",
                label: "Xanh lá cây",
              },
              {
                value: "Red",
                label: "Đỏ",
              },
              {
                value: "Yellow",
                label: "Vàng",
              },
              {
                value: "Orange",
                label: "Cam",
              },
              {
                value: "White",
                label: "Trắng",
              },
              {
                value: "Black",
                label: "Đen",
              },
            ]}
          />
        </div>
        {/* 
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder="Sở thích"
          defaultValue={["Vẽ"]}
          onChange={(value) => handleChange("descriptionHobby", value)}
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.label}
              </span>
            </Space>
          )}
        /> */}
        <Select
          className="select"
          showSearch
          placeholder="Sở thích của con"
          onChange={(value) => handleChange("descriptionHobby", value)}
          optionFilterProp="children"
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              label: "Vẽ",
              value: "Painting",
            },
            {
              label: "Chế tạo",
              value: "Crafting",
            },
            {
              label: "Đá bóng",
              value: "Soccer",
            },
            {
              label: "Đọc sách",
              value: "Read book",
            },
          ]}
        />
        <div className="select-form">
          <Select
            className="select"
            showSearch
            placeholder="Loại đồ chơi"
            onChange={(value) => handleChange("type", value)}
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Doll",
                label: "Búp bê",
              },
              {
                value: "Superman",
                label: "Siêu nhân",
              },
              {
                value: "Princess",
                label: "Công chúa",
              },
            ]}
          />
          <Select
            className="select"
            showSearch
            placeholder="Chất liệu"
            optionFilterProp="children"
            onChange={(value) => handleChange("material", value)}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Fabric",
                label: "Vải",
              },
              {
                value: "Lego",
                label: "Đồ lắp ghép",
              },
            ]}
          />
          <Select
            className="select"
            showSearch
            placeholder="Xuất xứ"
            optionFilterProp="children"
            onChange={(value) => handleChange("toyOrigin", value)}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "USA",
                label: "Mỹ",
              },
              {
                value: "china",
                label: "Trung quốc",
              },
              {
                value: "Korea",
                label: "Hàn quốc",
              },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateKidProfile;
