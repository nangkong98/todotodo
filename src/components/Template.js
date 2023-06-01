import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">오늘은 무엇을 해볼까 ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;