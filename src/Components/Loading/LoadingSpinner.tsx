import React from "react";
import { ClapSpinner } from "react-spinners-kit";
import "./loading.styled.css";

const PageLoader = () => {
  return (
    <div className="loading">
      <ClapSpinner sizeUnit="rem" frontColor="#a8a8a8" size={1} />
      <p className="text">loading</p>
    </div>
  );
};

export default PageLoader;
