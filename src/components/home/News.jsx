import { Alert } from "@mui/material";
import React from "react";

const News = () => {
  return (
    <div className="news-container">
      <div className="title">Tin tức mới nhất</div>
      <Alert style={{ marginTop: "10px" }} severity="warning">
        Tin tức mới nhất! Đang được cập nhật nội dung.
      </Alert>
    </div>
  );
};

export default News;
