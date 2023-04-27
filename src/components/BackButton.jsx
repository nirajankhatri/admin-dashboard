import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ redirectTo }) => {
  return (
    <Link to={redirectTo} className="backBtn">
      <FontAwesomeIcon icon={faArrowLeft} size="xl" />
    </Link>
  );
};

export default BackButton;
