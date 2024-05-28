import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThemes } from "../../redux/actions/theme.action";
import { Col, Row, message } from "antd";
const Theme = ({ setThemeId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThemes());
  }, []);
  const themes = useSelector((state) => state.themeReducer.themes);
  const handleChooseTheme = (id, name) => {
    setThemeId(id);
    message.success(`Bạn đã chọn theme ${name}`);
  };
  return (
    <div className="theme-conatiner">
      <Row>
        {themes?.themes?.map((item) => (
          <Col span={8}>
            <div className="theme">
              <img src={item.image} className="image" />
              <p className="title">{item.name}</p>
              <p className="des">{item.description}</p>
              <button
                className="btn"
                onClick={() => handleChooseTheme(item.id, item.name)}
              >
                Chọn
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Theme;
