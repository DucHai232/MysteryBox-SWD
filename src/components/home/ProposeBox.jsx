import React, { useEffect, useState } from "react";
import data from "../../data/ProposeBoxData.json";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ProposeBox = () => {
  const [position, setPosition] = useState(0);
  const [openScrollLeft, setOpenScrollLeft] = useState(false);
  const [openScrollRight, setOpenScrollRight] = useState(false);
  const space = 200;
  useEffect(() => {
    const proposeboxContainer = document.querySelector(".proposebox-container");
    const cards = document.querySelector(".card");
    const widthProposeBoxContainer = proposeboxContainer.clientWidth;
    const widthCards = cards.clientWidth;
    handleScroll(widthProposeBoxContainer, widthCards, position);
  }, [position]);
  const handleScroll = (containerWidth, cardsWidth, position) => {
    setOpenScrollLeft(position < 0);
    setOpenScrollRight(containerWidth + position > cardsWidth);
  };

  const handleScrollLeft = () => {
    setPosition((prev) => prev + space);
  };
  const handleScrollRight = () => {
    setPosition((prev) => prev - space);
  };
  return (
    <div className="proposebox-container">
      {openScrollLeft && (
        <div className="scroll scroll-left" onClick={handleScrollLeft}>
          {" "}
          <KeyboardArrowLeftIcon />
        </div>
      )}

      {openScrollRight && (
        <div className="scroll scroll-right" onClick={handleScrollRight}>
          {" "}
          <KeyboardArrowRightIcon />
        </div>
      )}

      <h1>Đề xuất hot</h1>
      <ul className="cards" style={{ transform: `translateX(${position}px)` }}>
        {data.map((card) => (
          <li className="card">
            <img src={card.image} className="image" />
            <p className="text">{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposeBox;
