import React from "react";

const CTAButton = ({ label, onClickHandler }) => {
  return <div className="CTAButton" onClick={onClickHandler}>{label}</div>;
};

export default CTAButton;
