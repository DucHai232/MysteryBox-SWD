import { Col, Row } from "antd";
import React from "react";

const listBox = [
  {
    id: 1,
    image: "https://static.live.templately.com/2020/08/0a61ba02-image-1.jpg",
    title: "Birthday Gifts",
  },
  {
    id: 2,
    image: "https://static.live.templately.com/2020/08/768fd494-image-2-3.jpg",
    title: "Anniversary",
  },
  {
    id: 3,
    image: "https://static.live.templately.com/2020/08/23470401-image-3.jpg",
    title: "Special Gifts",
  },
  {
    id: 4,
    image: "https://static.live.templately.com/2020/08/905192fb-image-4.jpg",
    title: "50% Off",
  },
];
const OtherBox = () => {
  const style = (image) => {
    return {
      backgroundImage: `url(${image})`,
      width: "95%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "var(--border-input)",
    };
  };
  return (
    <div className="otherbox-container">
      <Row>
        {listBox.map((item) => (
          <Col span={6}>
            <div className="box" style={style(item.image)}>
              <span className="title">{item.title}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OtherBox;
