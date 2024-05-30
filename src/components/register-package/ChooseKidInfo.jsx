import React, { useEffect, useState } from "react";
import { Alert, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getKidProfile } from "../../redux/actions/kid.action";
import { useNavigate } from "react-router-dom";
import { Input, Radio, Space } from "antd";
import CreateKidProfile from "../../pages/create-kid-profile/CreateKidProfile";
const ChooseKidInfo = ({ setKidId, kidId, themeId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getKidProfile());
  }, []);
  const kids = useSelector((state) => state.kidReducer);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setKidId(e.target.value);
  };
  return (
    <div>
      {kids?.dataKids?.length === 0 ? (
        <div className="alert-no-kid">
          {" "}
          <Alert
            message="Bạn chưa có thông tin nào của con"
            type="warning"
            className="alert"
          />
          <button className="btn" onClick={() => setModalOpen(true)}>
            Tạo thông tin ngay!
          </button>
          <CreateKidProfile
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            themeId={themeId}
          />
        </div>
      ) : (
        <div>
          <Radio.Group onChange={onChange} value={kidId}>
            <Space direction="vertical">
              {kids?.dataKids?.map((kid) => (
                <Radio value={kid?.id}>{kid?.fullName}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      )}
    </div>
  );
};

export default ChooseKidInfo;
