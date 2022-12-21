import React from "react";
import { RingSpinner } from "react-spinners-kit";
import "./loading.styled.css";

const PageLoader = () => {
  return (
    <div className="loading">
      <RingSpinner sizeUnit="rem" color="#a8a8a8" size={4} />
      <p className="text">loading</p>
    </div>
  );
};

export default PageLoader;
