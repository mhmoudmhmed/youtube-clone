import React from "react";
import "./Header.styles.css";
import SearchInput from "./SearchInput";
import MdLogo from "./Assets/YouTube-Icon-White-Logo.wine.svg";

const Header = () => {
  const LgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

  return (
    <div className="container">
      <img className="logo" src={LgLogo} alt="logo" />
      <img className="md_logo" src={MdLogo} alt="logo" />
      <SearchInput />
    </div>
  );
};

export default Header;
